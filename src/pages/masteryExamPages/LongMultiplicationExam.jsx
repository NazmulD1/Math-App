import { useParams } from "react-router-dom";
import { generateLongMultiplicationProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";
import MasteryExam from "../../components/MasteryExam";

const LongMultiplicationExam = () => {
    return (
        <MasteryExam
            title="Long Multiplication Exam"
            problemGenerator={generateLongMultiplicationProblem}
            backToPath="/roadmap"
            backToText="Back to Roadmap"
            validateAnswer={validateAnswer}
            questionCount={19}
            timeLimit={200}
        />
    );
};

export default LongMultiplicationExam;