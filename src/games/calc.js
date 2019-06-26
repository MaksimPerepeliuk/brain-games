import makeGame from '..';
import getRandomValue from '../random';

const operators = ['+', '-', '*'];

const getCorrectAnswer = (leftOperand, operator, rightOperand) => {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      return undefined;
  }
};

const getGameData = () => {
  const leftOperand = getRandomValue();
  const rightOperand = getRandomValue();
  const randomIndex = getRandomValue(0, operators.length - 1);
  const randomOperator = operators[randomIndex];
  const gameQuestion = `${leftOperand} ${randomOperator} ${rightOperand}`;
  const correctAnswer = getCorrectAnswer(leftOperand, randomOperator, rightOperand);

  return { gameQuestion, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => makeGame(getGameData, gameDescription);
