import { useParams } from "react-router-dom";
import { generateLongAdditionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";
import MasteryExam from "../../components/MasteryExam";

const LongAdditionExam = () => {
    return (
        <MasteryExam
            title="Long Addition Exam"
            problemGenerator={generateLongAdditionProblem}
            backToPath="/roadmap"
            backToText="Back to RoadMap"
            validateAnswer={validateAnswer}
            questionCount={29}
            timeLimit={150}
        />
    );
};

export default LongAdditionExam;