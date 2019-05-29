import makeGame from '..';
import getRandomValue from '../random';

const isEven = randomValue => randomValue % 2 === 0;

const getQuestionAndCorrectAnswer = () => {
  const randomValue = getRandomValue();
  const correctAnswer = isEven(randomValue) ? 'yes' : 'no';

  return { question: randomValue, correct: correctAnswer };
};

export default makeGame(getQuestionAndCorrectAnswer, 'Answer "yes" if number even otherwise answer "no".');
