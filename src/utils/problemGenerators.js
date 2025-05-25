export function generateNumberRecognitionProblem() {
  const numberOfDots = Math.floor(Math.random() * 20) + 1;
  const dots = [];
  const rows = Math.ceil(numberOfDots / 5);
  const cols = Math.min(5, numberOfDots);

  for (let i = 0; i < numberOfDots; i++) {
    dots.push({
      id: i,
      row: Math.floor(i / 5),
      col: i % 5,
    });
  }

  return {
    questionText: "How many dots do you see?",
    dots: dots,
    answer: numberOfDots,
    rows: rows,
    cols: cols,
  };
}

export function validateNumberRecognitionAnswer(userAnswer, correctAnswer) {
  if (parseInt(userAnswer) === correctAnswer) {
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
}

export const generateBasicAdditionProblem = () => {
  const firstNumber = Math.floor(Math.random() * 9) + 1;
  const secondNumber = Math.floor(Math.random() * 9) + 1;
  const sum = firstNumber + secondNumber;
  return {
    questionText: `${firstNumber} + ${secondNumber}`,
    answer: sum,
  };
};

export const generateLongAdditionProblem = () => {
  const isThreeDigit = Math.random() < 0.5; // 50% chance for 2-digit or 3-digit numbers
  const min = isThreeDigit ? 100 : 10;
  const max = isThreeDigit ? 999 : 99;

  const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const sum = firstNumber + secondNumber;

  return {
    questionText: `${firstNumber} + ${secondNumber}`,
    answer: sum,
  };
};

export const generateBasicSubtractionProblem = () => {
  const firstNumber = Math.floor(Math.random() * 9) + 1;
  const secondNumber = Math.floor(Math.random() * 9) + 1;
  // Ensure first number is larger to avoid negative results
  const minuend = Math.max(firstNumber, secondNumber);
  const subtrahend = Math.min(firstNumber, secondNumber);
  const difference = minuend - subtrahend;
  return {
    questionText: `${minuend} - ${subtrahend}`,
    answer: difference,
  };
};

export const generateLongSubtractionProblem = () => {
  const isThreeDigit = Math.random() < 0.5; // 50% chance for 2-digit or 3-digit numbers
  const min = isThreeDigit ? 100 : 10;
  const max = isThreeDigit ? 999 : 99;

  const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Ensure first number is larger to avoid negative results
  const minuend = Math.max(firstNumber, secondNumber);
  const subtrahend = Math.min(firstNumber, secondNumber);
  const difference = minuend - subtrahend;

  return {
    questionText: `${minuend} - ${subtrahend}`,
    answer: difference,
  };
};

export const generateBasicMultiplicationProblem = () => {
  // Generate two random numbers between 1 and 12 for basic multiplication
  const firstNumber = Math.floor(Math.random() * 12) + 1;
  const secondNumber = Math.floor(Math.random() * 12) + 1;
  const product = firstNumber * secondNumber;

  return {
    questionText: `${firstNumber} × ${secondNumber}`,
    answer: product,
  };
};

export const generateLongMultiplicationProblem = () => {
  // Randomly decide which number will be 3 digits (first or second)
  const isFirstNumberThreeDigits = Math.random() < 0.5;

  // Generate the first number
  let firstNumber;
  if (isFirstNumberThreeDigits) {
    firstNumber = Math.floor(Math.random() * 900) + 100; // 100 to 999
  } else {
    const firstNumberDigits = Math.floor(Math.random() * 2) + 1; // 1 or 2 digits
    firstNumber =
      firstNumberDigits === 1
        ? Math.floor(Math.random() * 9) + 1 // 1 to 9
        : Math.floor(Math.random() * 90) + 10; // 10 to 99
  }

  // Generate the second number
  let secondNumber;
  if (!isFirstNumberThreeDigits) {
    secondNumber = Math.floor(Math.random() * 900) + 100; // 100 to 999
  } else {
    const secondNumberDigits = Math.floor(Math.random() * 2) + 1; // 1 or 2 digits
    secondNumber =
      secondNumberDigits === 1
        ? Math.floor(Math.random() * 9) + 1 // 1 to 9
        : Math.floor(Math.random() * 90) + 10; // 10 to 99
  }

  // Calculate the product
  const product = firstNumber * secondNumber;

  return {
    questionText: `${firstNumber} × ${secondNumber}`,
    answer: product,
  };
};

export const generateBasicDivisionProblem = () => {
  // Generate two numbers between 1 and 12
  const firstNumber = Math.floor(Math.random() * 12) + 1; // Quotient
  const secondNumber = Math.floor(Math.random() * 12) + 1; // Divisor

  // Ensure the dividend is evenly divisible by the divisor
  const dividend = firstNumber * secondNumber;

  // Return the division problem
  return {
    questionText: `${dividend} ÷ ${secondNumber}`,
    answer: firstNumber,
  };
};

export const generateDivisionWithRemaindersProblem = () => {
  // Generate a random divisor and quotient
  const divisor = Math.floor(Math.random() * 11) + 2; // 2 to 12
  const quotient = Math.floor(Math.random() * 12) + 1; // 1 to 12

  // Generate a random remainder less than the divisor
  const remainder = Math.floor(Math.random() * divisor);

  // Calculate the dividend
  const dividend = quotient * divisor + remainder;

  return {
    questionText: `${dividend} ÷ ${divisor}`,
    answer: { quotient, remainder },
  };
};

export const generateLongDivisionProblem = () => {
  // Randomly decide the number of digits for the dividend and divisor
  const dividendDigits = Math.floor(Math.random() * 2) + 3; // 3 or 4 digits
  const divisorDigits = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3 digits

  // Generate the dividend
  const dividendMin = Math.pow(10, dividendDigits - 1);
  const dividendMax = Math.pow(10, dividendDigits) - 1;
  const dividend =
    Math.floor(Math.random() * (dividendMax - dividendMin + 1)) + dividendMin;

  // Generate the divisor
  const divisorMin = Math.pow(10, divisorDigits - 1);
  const divisorMax = Math.pow(10, divisorDigits) - 1;
  const divisor =
    Math.floor(Math.random() * (divisorMax - divisorMin + 1)) + divisorMin;

  // Calculate the quotient and remainder
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;

  return {
    questionText: `${dividend} ÷ ${divisor}`,
    answer: { quotient, remainder },
  };
};

export function generateComparingFractionsProblem() {
    let numerator1, denominator1, numerator2, denominator2;

    do {
      numerator1 = Math.floor(Math.random() * 9) + 1;
      denominator1 = Math.floor(Math.random() * 9) + 1;
    } while (numerator1 >= denominator1);

    do {
      numerator2 = Math.floor(Math.random() * 9) + 1;
      denominator2 = Math.floor(Math.random() * 9) + 1;
    } while (numerator2 >= denominator2);

    const leftFraction = `${numerator1}/${denominator1}`;
    const rightFraction = `${numerator2}/${denominator2}`;

    return {
      questionText: `Which is larger: ${leftFraction} or ${rightFraction}?`,
      answer:
        numerator1 / denominator1 > numerator2 / denominator2
          ? leftFraction
          : rightFraction,
    };
}

export function generateLowestCommonDenominatorProblem() {
  const numerator1 = Math.floor(Math.random() * 9) + 1;
  const denominator1 = Math.floor(Math.random() * 9) + 2; // Ensure denominator is at least 2

  const numerator2 = Math.floor(Math.random() * 9) + 1;
  const denominator2 = Math.floor(Math.random() * 9) + 2;

  // Calculate the Lowest Common Denominator (LCD)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcd = (denominator1 * denominator2) / gcd(denominator1, denominator2);

  return {
    questionText: `Find the lowest common denominator (LCD) for ${numerator1}/${denominator1} and ${numerator2}/${denominator2}.`,
    answer: `${lcd}`,
  };
}

export function generateReducingFractionsProblem() {
  // Define gcd function at the top
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Generate a random fraction that can be reduced
  let numerator, denominator;

  do {
    // Generate numbers between 2 and 20
    numerator = Math.floor(Math.random() * 19) + 2;
    denominator = Math.floor(Math.random() * 19) + 2;

    // Skip if numerator equals denominator
    if (numerator === denominator) continue;

    // Calculate GCD
    const greatestCommonDivisor = gcd(numerator, denominator);

    // Only use fractions that can be reduced (GCD > 1)
  } while (gcd(numerator, denominator) === 1);

  // Calculate the reduced form
  const greatestCommonDivisor = gcd(numerator, denominator);
  const reducedNumerator = numerator / greatestCommonDivisor;
  const reducedDenominator = denominator / greatestCommonDivisor;


  return {
    questionText: `Reduce the fraction ${numerator}/${denominator} to its simplest form.`,
    answer: `${reducedNumerator}/${reducedDenominator}`,
  };
}

export function generateConvertingFractionsProblem() {
  // Generate a random fraction with denominator between 2 and 10
  const denominator = Math.floor(Math.random() * 9) + 2;
  const numerator = Math.floor(Math.random() * (denominator - 1)) + 1;

  // Calculate the decimal value
  const decimalValue = (numerator / denominator).toFixed(3);

  return {
    questionText: `Convert the fraction ${numerator}/${denominator} to a decimal. Round to 3 decimal places.`,
    answer: decimalValue,
  };
}

export function generateDecimalArithmeticProblem() {
  // Randomly choose an operation
  const operations = ["+", "-", "×", "÷"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  // Generate random decimal numbers
  let num1, num2, answer;

  switch (operation) {
    case "+":
      num1 = (Math.random() * 10).toFixed(2);
      num2 = (Math.random() * 10).toFixed(2);
      answer = (parseFloat(num1) + parseFloat(num2)).toFixed(3);
      break;
    case "-":
      num1 = (Math.random() * 10).toFixed(2);
      num2 = (Math.random() * parseFloat(num1)).toFixed(2); // Ensure positive result
      answer = (parseFloat(num1) - parseFloat(num2)).toFixed(3);
      break;
    case "×":
      num1 = (Math.random() * 10).toFixed(1);
      num2 = (Math.random() * 10).toFixed(1);
      answer = (parseFloat(num1) * parseFloat(num2)).toFixed(3);
      break;
    case "÷":
      num1 = (Math.random() * 10).toFixed(2);
      num2 = (Math.random() * 5 + 1).toFixed(1); // Avoid division by zero
      answer = (parseFloat(num1) / parseFloat(num2)).toFixed(3);
      break;
  }

  return {
    questionText: `Calculate: ${num1} ${operation} ${num2} (Round to 3 decimal places)`,
    answer: answer,
  };
}

export function generateAddingSubtractingFractionsProblem() {
  // Randomly decide whether to add or subtract
  const isAddition = Math.random() < 0.5;

  // Generate denominators between 2 and 12
  const denominator1 = Math.floor(Math.random() * 11) + 2;
  const denominator2 = Math.floor(Math.random() * 11) + 2;

  // Generate numerators (ensuring they're less than denominators)
  const numerator1 = Math.floor(Math.random() * (denominator1 - 1)) + 1;
  const numerator2 = Math.floor(Math.random() * (denominator2 - 1)) + 1;

  // Calculate the answer
  let answerNumerator, answerDenominator;

  if (denominator1 === denominator2) {
    // Same denominator case
    answerDenominator = denominator1;
    answerNumerator = isAddition
      ? numerator1 + numerator2
      : numerator1 - numerator2;
  } else {
    // Different denominators - find LCD
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcd = (denominator1 * denominator2) / gcd(denominator1, denominator2);

    // Convert to common denominator
    const newNumerator1 = numerator1 * (lcd / denominator1);
    const newNumerator2 = numerator2 * (lcd / denominator2);

    answerDenominator = lcd;
    answerNumerator = isAddition
      ? newNumerator1 + newNumerator2
      : newNumerator1 - newNumerator2;
  }

  // Reduce the answer to simplest form
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const greatestCommonDivisor = gcd(
    Math.abs(answerNumerator),
    answerDenominator
  );
  const reducedNumerator = answerNumerator / greatestCommonDivisor;
  const reducedDenominator = answerDenominator / greatestCommonDivisor;

  // Format the answer
  const answer = `${reducedNumerator}/${reducedDenominator}`;

  // Generate the question text
  const operator = isAddition ? "+" : "-";
  const questionText = `${numerator1}/${denominator1} ${operator} ${numerator2}/${denominator2}`;

  return {
    questionText,
    answer,
    type: isAddition ? "addition" : "subtraction",
  };
}

export function generateMultiplyingDividingFractionsProblem() {
  // Randomly decide whether to multiply or divide
  const isMultiplication = Math.random() < 0.5;

  // Generate denominators between 2 and 12
  const denominator1 = Math.floor(Math.random() * 11) + 2;
  const denominator2 = Math.floor(Math.random() * 11) + 2;

  // Generate numerators (ensuring they're less than denominators)
  const numerator1 = Math.floor(Math.random() * (denominator1 - 1)) + 1;
  const numerator2 = Math.floor(Math.random() * (denominator2 - 1)) + 1;

  // Calculate the answer
  let answerNumerator, answerDenominator;

  if (isMultiplication) {
    // For multiplication, multiply numerators and denominators
    answerNumerator = numerator1 * numerator2;
    answerDenominator = denominator1 * denominator2;
  } else {
    // For division, multiply by the reciprocal
    answerNumerator = numerator1 * denominator2;
    answerDenominator = denominator1 * numerator2;
  }

  // Reduce the answer to simplest form
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const greatestCommonDivisor = gcd(
    Math.abs(answerNumerator),
    Math.abs(answerDenominator)
  );
  const reducedNumerator = answerNumerator / greatestCommonDivisor;
  const reducedDenominator = answerDenominator / greatestCommonDivisor;

  // Format the answer
  const answer = `${reducedNumerator}/${reducedDenominator}`;

  // Generate the question text with instructions
  const operator = isMultiplication ? "×" : "÷";
  const questionText = `${numerator1}/${denominator1} ${operator} ${numerator2}/${denominator2} (Reduce your answer to simplest form by dividing both the numerator and denominator by their greatest common factor.)`;

  return {
    questionText,
    answer,
    type: isMultiplication ? "multiplication" : "division",
    instructions:
      "Remember to reduce your answer to simplest form by dividing both the numerator and denominator by their greatest common factor.",
  };
}
