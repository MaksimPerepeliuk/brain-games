import makeGame from '..';
import getRandomValue from '../random';

const isPrime = (value) => {
  if (value < 2) {
    return false;
  }

  for (let i = 2; i <= value / 2; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const gameQuestion = getRandomValue();
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

  return { gameQuestion, correctAnswer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => makeGame(getGameData, gameDescription);
