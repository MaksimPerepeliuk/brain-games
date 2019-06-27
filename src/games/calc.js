import makeGame from '..';
import getRandomValue from '../random';

const operators = ['+', '-', '*'];

const getCorrectAnswer = (leftOperand, rightOperand, operator) => {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      return false;
  }
};

const getGameData = () => {
  const leftOperand = getRandomValue();
  const rightOperand = getRandomValue();
  const randomIndex = getRandomValue(0, operators.length - 1);
  const operator = operators[randomIndex];
  const gameQuestion = `${leftOperand} ${operator} ${rightOperand}`;
  const correctAnswer = getCorrectAnswer(leftOperand, rightOperand, operator);

  return { gameQuestion, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => makeGame(getGameData, gameDescription);
