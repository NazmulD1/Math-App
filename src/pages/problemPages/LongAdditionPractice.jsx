import PracticePage from "../../components/practice/PracticePage";
import { generateLongAdditionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";

const LongAdditionPractice = () => {
    return (
        <PracticePage
            title="Long Addition Practice"
            problemGenerator={generateLongAdditionProblem}
            backToPath="/freestudy" // Updated to Free Study page
            backToText="Back to Free Study"
            validateAnswer={validateAnswer}
            unitNumber={3}
        />
    );
};

export default LongAdditionPractice;
