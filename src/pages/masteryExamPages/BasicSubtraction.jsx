import { useParams } from "react-router-dom";
import { generateBasicSubtractionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";
import MasteryExam from "../../components/MasteryExam";

const BasicSubtractionExam = () => {
    return (
        <MasteryExam
            title="Basic Subtraction Exam"
            problemGenerator={generateBasicSubtractionProblem}
            backToPath="/roadmap"
            backToText="Back to Roadmap"
            validateAnswer={validateAnswer}
            questionCount={49}
            timeLimit={120}
        />
    );
};

export default BasicSubtractionExam;