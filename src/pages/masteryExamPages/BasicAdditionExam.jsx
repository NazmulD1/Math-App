import { useParams } from "react-router-dom";
import { generateBasicAdditionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";
import MasteryExam from "../../components/MasteryExam";

const BasicAdditionExam = () => {
    return (
        <MasteryExam
            title="Basic Addition Exam"
            problemGenerator={generateBasicAdditionProblem}
            backToPath="/roadmap"
            backToText="Back to RoadMap"
            validateAnswer={validateAnswer}
            questionCount={49}
            timeLimit={120}
        />
    );
};

export default BasicAdditionExam;