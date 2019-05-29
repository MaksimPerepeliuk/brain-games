import makeGame from '..';
import getRandomValue from '../random';

const getStrWithRandomValue = () => {
  const randomNum1 = getRandomValue();
  const randomNum2 = getRandomValue();

  return `${randomNum1} ${randomNum2}`;
};

const getCorrectAnswer = (randomValue) => {
  const arr = randomValue.split(' ');
  const [num1, num2] = arr;
  const iter = (acc) => {
    if (num1 % acc === 0 && num2 % acc === 0) {
      return acc;
    }

    return iter(acc - 1);
  };

  return iter(num1);
};

const getRandomValueAndCorrectAnswer = () => {
  const randomValue = getStrWithRandomValue();

  return { question: randomValue, correct: getCorrectAnswer(randomValue) };
};

export default makeGame(getRandomValueAndCorrectAnswer, 'Find the greatest common divisor of given numbers.');
