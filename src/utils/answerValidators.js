export const validateAnswer = (userAnswer, correctAnswer) => {
  // Normalize both userAnswer and correctAnswer by trimming whitespace
  const normalizedUserAnswer = String(userAnswer).trim();
  const normalizedCorrectAnswer = String(correctAnswer).trim();

  if (normalizedUserAnswer === normalizedCorrectAnswer) {
    return {
      message: "Correct!",
      correctAnswer: null,
    };
  } else {
    return {
      message: "Incorrect!",
      correctAnswer: correctAnswer,
    };
  }
};
