import { useParams } from "react-router-dom";
import { generateLongSubtractionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";
import MasteryExam from "../../components/MasteryExam";

const LongSubtractionExam = () => {
    return (
        <MasteryExam
            title="Long Subtraction Exam"
            problemGenerator={generateLongSubtractionProblem}
            backToPath="/roadmap"
            backToText="Back to Roadmap"
            validateAnswer={validateAnswer}
            questionCount={49}
            timeLimit={150}
        />
    );
};

export default LongSubtractionExam;