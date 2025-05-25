import { useParams } from "react-router-dom";
import { generateBasicDivisionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";
import MasteryExam from "../../components/MasteryExam";

const BasicDivisionExam = () => {
    return (
        <MasteryExam
            title="Basic Division Exam"
            problemGenerator={generateBasicDivisionProblem}
            backToPath="/roadmap"
            backToText="Back to Roadmap"
            validateAnswer={validateAnswer}
            questionCount={49}
            timeLimit={120}
        />
    );
};

export default BasicDivisionExam;