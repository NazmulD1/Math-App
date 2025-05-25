import { useParams } from "react-router-dom";
import PracticePage from "../../components/practice/PracticePage";
import { generateBasicAdditionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";

const BasicAdditionPractice = () => {
    return (
        <PracticePage
            title="Basic Addition Practice"
            problemGenerator={generateBasicAdditionProblem}
            backToPath="/freestudy"
            backToText="Back to Free Study"
            validateAnswer={validateAnswer}
            unitNumber={2}
        />
    );
};

export default BasicAdditionPractice;