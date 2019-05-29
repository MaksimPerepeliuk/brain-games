import makeGame from '..';
import getRandomValue from '../random';

const getStrWithRandomValue = () => {
  const randomNum1 = getRandomValue();
  const randomNum2 = getRandomValue();
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];

  return `${randomNum1} ${randomOperator} ${randomNum2}`;
};

const getCorrectAnswer = (randomValue) => {
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

const getQuestionAndCorrectAnswer = () => {
  const randomValue = getStrWithRandomValue();

  return { question: randomValue, correct: getCorrectAnswer(randomValue) };
};

export default makeGame(getQuestionAndCorrectAnswer, 'What is the result of the expression?');
