import { useParams } from "react-router-dom";
import PracticePage from "../../components/practice/PracticePage";
import { generateBasicMultiplicationProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";

const BasicMultiplicationPractice = () => {
    const { value } = useParams();
    const multiplier = parseInt(value);

    return (
        <PracticePage
            title="Basic Multiplication Practice"
            problemGenerator={() => generateBasicMultiplicationProblem}
            backToPath="/freestudy"
            backToText="Back to Free Study"
            validateAnswer={validateAnswer}
            unitNumber={6}
        />
    );
};

export default BasicMultiplicationPractice;