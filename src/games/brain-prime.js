import makeGame from '..';
import getRandomValue from '../random';

const getCorrectAnswer = (randomValue) => {
  if (randomValue < 2) {
    return 'no';
  }

  for (let i = 2; i < randomValue; i += 1) {
    if (randomValue % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getRandomValueAndCorrectAnswer = () => {
  const randomValue = getRandomValue();

  return { question: randomValue, correct: getCorrectAnswer(randomValue) };
};

export default makeGame(getRandomValueAndCorrectAnswer, 'Answer "yes" if given number is prime. Otherwise answer "no".');
