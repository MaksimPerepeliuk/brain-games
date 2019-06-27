import makeGame from '..';
import getRandomValue from '../random';

const getGcd = (num1, num2) => {
  const iter = (counter) => {
    if (num1 % counter === 0 && num2 % counter === 0) {
      return counter;
    }

    return iter(counter - 1);
  };

  return iter(num1);
};

const getGameData = () => {
  const randomNum1 = getRandomValue();
  const randomNum2 = getRandomValue();
  const gameQuestion = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getGcd(randomNum1, randomNum2);

  return { gameQuestion, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => makeGame(getGameData, gameDescription);
