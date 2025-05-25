import PracticePage from "../../components/practice/PracticePage";
import { generateLongSubtractionProblem } from "../../utils/problemGenerators";
import { validateAnswer } from "../../utils/answerValidators";

const LongSubtractionPractice = () => {
  return (
    <PracticePage
      title="Long Subtraction Practice"
      problemGenerator={generateLongSubtractionProblem}
      backToPath="/freestudy"
      backToText="Back to Free Study"
      validateAnswer={validateAnswer}
      unitNumber={5}
    />
  );
};

export default LongSubtractionPractice;
