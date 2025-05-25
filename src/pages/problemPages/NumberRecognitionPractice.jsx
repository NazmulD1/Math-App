import { useParams } from "react-router-dom";
import PracticePage from "../../components/practice/PracticePage";
import DotDisplay from "../../components/practice/DotDisplay";
import { generateNumberRecognitionProblem, validateNumberRecognitionAnswer } from "../../utils/problemGenerators";

const NumberRecognitionPractice = () => {
    const renderProblem = (problem) => (
        <div className="number-recognition-problem">
            <h2>{problem.questionText}</h2>
            <DotDisplay dots={problem.dots} rows={problem.rows} cols={problem.cols} />
        </div>
    );

    return (
        <PracticePage
            title="Number Recognition and Counting"
            problemGenerator={generateNumberRecognitionProblem}
            backToPath="/freestudy"
            backToText="Back to Free Study"
            validateAnswer={validateNumberRecognitionAnswer}
            inputType="number"
            inputPlaceholder="Enter the number of dots"
            renderProblem={renderProblem}
            unitNumber={1}
        />
    );
};

export default NumberRecognitionPractice;