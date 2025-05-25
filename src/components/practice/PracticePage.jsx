import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import ProgressTracker from "./ProgressTracker";
import { calculateScore } from "../../utils/scoreCalculator";
import { updateHighScore } from "../../utils/highScoreManager";
import "../../css/PracticePage.css";

// Sound effects - make them optional and handle errors gracefully
let correctSound, incorrectSound;
try {
    correctSound = new Audio('/sounds/correct.mp3');
    incorrectSound = new Audio('/sounds/incorrect.mp3');
} catch (error) {
    console.log('Sound effects not available');
}

const PracticePage = ({ 
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
    unitNumber
}) => {
    const { value } = useParams();
    const location = useLocation();
    const [question, setQuestion] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [stats, setStats] = useState({ correct: 0, total: 0 });
    const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [localAnswer, setLocalAnswer] = useState("");
    const [currentScore, setCurrentScore] = useState(0);
    const [highScoreMessage, setHighScoreMessage] = useState("");

    // Reset all state when location or unitNumber changes
    useEffect(() => {
        const resetState = () => {
            setQuestion(null);
            setFeedback(null);
            setIsAnimating(false);
            setStats({ correct: 0, total: 0 });
            setTimeLeft(30);
            setIsTimerRunning(false);
            setLocalAnswer("");
            setCurrentScore(0);
            setHighScoreMessage("");
        };

        resetState();
        generateNewQuestion();

        // Cleanup function to reset state when unmounting
        return () => {
            resetState();
        };
    }, [location.pathname, unitNumber]);

    const generateNewQuestion = useCallback(() => {
        setIsAnimating(true);
        setQuestion(problemGenerator(value));
        setFeedback(null);
        setTimeLeft(30);
        setIsTimerRunning(true);
        setLocalAnswer("");
        setTimeout(() => setIsAnimating(false), 500);
    }, [problemGenerator, value]);

    useEffect(() => {
        if (onNewProblem && question) {
            onNewProblem();
        }
    }, [question, onNewProblem]);

    useEffect(() => {
        let timer;
        if (isTimerRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleTimeout();
        }
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isTimerRunning, timeLeft]);

    const handleTimeout = () => {
        setIsTimerRunning(false);
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

    const handleSubmit = useCallback(async (event) => {
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
        
        // Calculate score if answer is correct
        if (result.message === "Correct!" && unitNumber) {
            const timeUsed = 30 - timeLeft; // Time used in seconds
            const score = calculateScore(timeUsed, unitNumber);
            setCurrentScore(score);

            // Update high score
            const highScoreResult = await updateHighScore(unitNumber, score);
            if (highScoreResult.success) {
                setHighScoreMessage(highScoreResult.message);
            }
        }
        
        // Update stats
        setStats(prevStats => ({
            correct: result.message === "Correct!" ? prevStats.correct + 1 : prevStats.correct,
            total: prevStats.total + 1
        }));
        
        setTimeout(() => setIsAnimating(false), 500);
    }, [userAnswer, localAnswer, question, validateAnswer, timeLeft, unitNumber]);

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
            {currentScore > 0 && (
                <div className="score-display">
                    Current Score: {currentScore}
                </div>
            )}
            {highScoreMessage && (
                <div className="high-score-message">
                    {highScoreMessage}
                </div>
            )}
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
                <button 
                    onClick={generateNewQuestion}
                    disabled={isTimerRunning}
                >
                    New Question
                </button>
                <Link to={backToPath}>
                    <button>{backToText}</button>
                </Link>
            </div>
        </div>
    );
};

export default PracticePage;