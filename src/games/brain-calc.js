export const getRandomValue = () => {
  const randomNum1 = Math.floor(Math.random() * 50);
  const randomNum2 = Math.floor(Math.random() * 50);
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];

  return `${randomNum1} ${randomOperator} ${randomNum2}`;
};

export const getCorrectAnswer = (randomValue) => {
  const arr = randomValue.split(' ');
  const [number1, operator, number2] = arr;
  switch (operator) {
    case '+':
      return Number(number1) + Number(number2);
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return undefined;
  }
};
