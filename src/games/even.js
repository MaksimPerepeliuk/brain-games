import makeGame from '..';
import getRandomValue from '../random';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const gameQuestion = getRandomValue();
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  return { gameQuestion, correctAnswer };
};

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export default () => makeGame(getGameData, gameDescription);
