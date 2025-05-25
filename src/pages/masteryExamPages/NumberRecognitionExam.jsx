import { useParams } from "react-router-dom";
import { generateNumberRecognitionProblem, validateNumberRecognitionAnswer } from "../../utils/problemGenerators";
import DotDisplay from "../../components/practice/DotDisplay";
import MasteryExam from "../../components/MasteryExam";

const NumberRecognitionExam = () => {
    const renderProblem = (problem) => (
        <div className="number-recognition-problem">
            <h2>{problem.questionText}</h2>
            <DotDisplay dots={problem.dots} rows={problem.rows} cols={problem.cols} />
        </div>
    );

    return (
        <MasteryExam
            title="Number Recognition and Counting Exam"
            problemGenerator={generateNumberRecognitionProblem}
            backToPath="/roadmap"
            backToText="Back to Roadmap"
            validateAnswer={validateNumberRecognitionAnswer}
            inputType="number"
            inputPlaceholder="Enter the number of dots"
            renderProblem={renderProblem}
            questionCount={29}
            timeLimit={100}
        />
    );
};

export default NumberRecognitionExam;