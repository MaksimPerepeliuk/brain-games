import makeGame from '..';
import getRandomValue from '../random';

const operators = ['+', '-', '*'];

const getCorrectAnswer = (leftOperand, operator, rightOperand) => {
  switch (operator) {
    case '+':
      return Number(leftOperand) + Number(rightOperand);
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      return undefined;
  }
};

const getGameData = () => {
  const randomNum1 = getRandomValue();
  const randomNum2 = getRandomValue();
  const randomIndex = getRandomValue(0, operators.length - 1);
  const randomOperator = operators[randomIndex];
  const gameQuestion = `${randomNum1} ${randomOperator} ${randomNum2}`;

  return {
    question: gameQuestion,
    correctAnswer: getCorrectAnswer(randomNum1, randomOperator, randomNum2),
  };
};

const gameDescription = 'What is the result of the expression?';

export default () => makeGame(getGameData, gameDescription);
