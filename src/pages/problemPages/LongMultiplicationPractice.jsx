import PracticePage from "../../components/practice/PracticePage";
import { generateLongMultiplicationProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";

const LongMultiplicationPractice = () => {
  return (
    <PracticePage
      title="Long Multiplication Practice"
      problemGenerator={generateLongMultiplicationProblem}
      backToPath="/freestudy"
      backToText="Back to Free Study"
      validateAnswer={validateAnswer}
      unitNumber={7}
    />
  );
};

export default LongMultiplicationPractice;
