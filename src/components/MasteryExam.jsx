import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ProgressTracker from "./practice/ProgressTracker";
import "../css/PracticePage.css";

// Sound effects - make them optional and handle errors gracefully
let correctSound, incorrectSound;
try {
    correctSound = new Audio('/sounds/correct.mp3');
    incorrectSound = new Audio('/sounds/incorrect.mp3');
} catch (error) {
    console.log('Sound effects not available');
}

const MasteryExam = ({ 
    title, 
    problemGenerator, 
    backToPath, 
    backToText,
    validateAnswer,
    renderProblem,
    inputType = "number",
    inputPlaceholder = "Enter your answer",
    customInput,
    userAnswer,
    onNewProblem,
    onAnswerChange,
    timeLimit,
    questionCount
}) => {
    const { value } = useParams();
    const [question, setQuestion] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [stats, setStats] = useState({ correct: 0, total: 0 });
    const [timeLeft, setTimeLeft] = useState(timeLimit);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [localAnswer, setLocalAnswer] = useState("");
    const [isTestOver, setIsTestOver] = useState(false);

    const generateNewQuestion = useCallback(() => {
        setIsAnimating(true);
        setQuestion(problemGenerator(value));
        setFeedback(null);
        setIsTimerRunning(true);
        setLocalAnswer("");
        setTimeout(() => setIsAnimating(false), 200);
    }, [problemGenerator, value]);

    useEffect(() => {
        generateNewQuestion();
    }, [generateNewQuestion]);

    useEffect(() => {
        if (onNewProblem && question) {
            onNewProblem();
        }
    }, [question, onNewProblem]);

    useEffect(() => {
        let timer;
        if (isTimerRunning) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleTimeout();
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, timeLeft]);

    const handleTimeout = () => {
        setIsTimerRunning(false);
        setIsTestOver(true)
        try {
            if (incorrectSound) {
                incorrectSound.play().catch(error => {
                    console.log('Error playing sound:', error);
                });
            }
        } catch (error) {
            console.log('Sound effect not available');
        }
        setFeedback({
            message: "Time's up!",
            correctAnswer: question.answer
        });
        setStats(prev => ({ ...prev, total: prev.total + 1 }));
    };

    const handleChange = useCallback((event) => {
        const newValue = event.target.value;
        if (onAnswerChange) {
            onAnswerChange(newValue);
        } else {
            setLocalAnswer(newValue);
        }
    }, [onAnswerChange]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setIsAnimating(true);
        setIsTimerRunning(false);
        
        const currentAnswer = userAnswer !== undefined ? userAnswer : localAnswer;
        const result = validateAnswer(currentAnswer, question.answer);
        setFeedback(result);
        
        // Play sound effect if available
        try {
            if (result.message === "Correct!" && correctSound) {
                correctSound.play().catch(error => {
                    console.log('Error playing sound:', error);
                });
            } else if (incorrectSound) {
                incorrectSound.play().catch(error => {
                    console.log('Error playing sound:', error);
                });
            }
        } catch (error) {
            console.log('Sound effect not available');
        }
        
        // Update stats
        setStats(prevStats => {
            const updatedStats = {
            correct: result.message === "Correct!" ? prevStats.correct + 1 : prevStats.correct,
            total: prevStats.total + 1
        };

            if(updatedStats.total == questionCount) {
                setIsTimerRunning(false)
                setIsTestOver(true)
            }

            return updatedStats;
        });
        
        setTimeout(() => {
            setIsAnimating(false);
            if(!isTestOver) {
                generateNewQuestion();
            }
    }, 200); 
}, [userAnswer, localAnswer, question, validateAnswer, generateNewQuestion]);

    const memoizedCustomInput = useMemo(() => {
        if (!customInput) {
            return (
                <input
                    type={inputType}
                    value={userAnswer !== undefined ? userAnswer : localAnswer}
                    onChange={handleChange}
                    placeholder={inputPlaceholder}
                    autoFocus
                    disabled={!isTimerRunning}
                />
            );
        }
        return customInput;
    }, [customInput, inputType, userAnswer, localAnswer, handleChange, inputPlaceholder, isTimerRunning]);

    if (!question) {
        return (
            <div className="practice-page">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="practice-page">
            <h2>{title}</h2>
            <ProgressTracker correct={stats.correct} total={stats.total} />
            <div className="timer">
                Time Left: {timeLeft}s
            </div>
            <div className={`question-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                {renderProblem ? (
                    renderProblem(question)
                ) : (
                    <h2>{question.questionText}</h2>
                )}
                <form onSubmit={handleSubmit}>
                    {memoizedCustomInput}
                    <button 
                        type="submit"
                        disabled={!isTimerRunning}
                    >
                        Check Answer
                    </button>
                </form>
            </div>
            {feedback && (
                <div className={`feedback ${feedback.message === "Correct!" ? 'correct' : 'incorrect'} ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                    <h3>{feedback.message}</h3>
                    {feedback.correctAnswer && (
                        <p>The correct answer is {feedback.correctAnswer}</p>
                    )}
                </div>
            )}
            <div className="navigation-buttons">
                <Link to={backToPath}>
                    <button>{backToText}</button>
                </Link>
            </div>
        </div>
    );
};

export default MasteryExam;