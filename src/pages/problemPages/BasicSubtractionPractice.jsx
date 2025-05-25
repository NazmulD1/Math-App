import { useParams } from "react-router-dom";
import PracticePage from "../../components/practice/PracticePage";
import { generateBasicSubtractionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";

const BasicSubtractionPractice = () => {
    // Removed 'subtrahend' variable as it is not needed

    return (
        <PracticePage
            title="Basic Subtraction Practice"
            problemGenerator={generateBasicSubtractionProblem} // Removed argument
            backToPath="/freestudy"
            backToText="Back to Free Study"
            validateAnswer={validateAnswer}
            unitNumber={4}
        />
    );
};

export default BasicSubtractionPractice;