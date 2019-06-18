import makeGame from '..';
import getRandomValue from '../random';

const isPrime = (randomValue) => {
  if (randomValue < 2) {
    return false;
  }

  for (let i = 2; i < randomValue; i += 1) {
    if (randomValue % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const gameQuestion = getRandomValue();
  const answer = isPrime(gameQuestion) ? 'yes' : 'no';

  return { question: gameQuestion, correctAnswer: answer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => makeGame(getGameData, gameDescription);
