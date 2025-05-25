export const calculateScore = (timeInSeconds, unitNumber) => {
  // Base score increases with unit number (1-12)
  const baseScore = unitNumber * 100;

  // Time penalty: subtract points based on time taken
  // More time = more penalty, but with diminishing returns
  const timePenalty = Math.floor(timeInSeconds * 2);

  // Calculate final score
  let finalScore = baseScore - timePenalty;

  // Ensure score doesn't go below 0
  finalScore = Math.max(0, finalScore);

  return finalScore;
};

