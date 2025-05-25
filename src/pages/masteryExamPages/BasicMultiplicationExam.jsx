import { useParams } from "react-router-dom";
import { generateBasicMultiplicationProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";
import MasteryExam from "../../components/MasteryExam";

const BasicMultiplicationExam = () => {
    return (
        <MasteryExam
            title="Basic Multiplication Exam"
            problemGenerator={generateBasicMultiplicationProblem}
            backToPath="/roadmap"
            backToText="Back to Roadmap"
            validateAnswer={validateAnswer}
            questionCount={49}
            timeLimit={120}
        />
    );
};

export default BasicMultiplicationExam;