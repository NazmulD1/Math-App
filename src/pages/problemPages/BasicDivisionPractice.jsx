import { useParams } from "react-router-dom";
import PracticePage from "../../components/practice/PracticePage";
import { generateBasicDivisionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";

const BasicDivisionPractice = () => {
    const { value } = useParams();
    const divisor = parseInt(value);

    return (
        <PracticePage
            title="Basic Division Practice"
            problemGenerator={() => generateBasicDivisionProblem}
            backToPath="/freestudy"
            backToText="Back to Free Study"
            validateAnswer={validateAnswer}
            unitNumber={8}
        />
    );
};

export default BasicDivisionPractice;