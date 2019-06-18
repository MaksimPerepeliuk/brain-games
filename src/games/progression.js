import makeGame from '..';
import getRandomValue from '../random';

const getQuestion = (series) => {
  const seriesArr = series;
  const randomIndex = getRandomValue(0, series.length - 1);
  const hideNum = seriesArr[randomIndex];
  seriesArr[randomIndex] = '..';
  const gameQuestion = series.join(' ');

  return { question: gameQuestion, correctAnswer: hideNum };
};

const getGameData = () => {
  const startNum = getRandomValue();
  const stepProgression = getRandomValue();
  const seriesLength = 10;
  const iter = (stepNum, acc) => {
    if (acc.length === seriesLength) {
      return getQuestion(acc);
    }

    return iter(stepNum + stepProgression, [...acc, stepNum]);
  };

  return iter(startNum + stepProgression, [startNum]);
};

const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(getGameData, gameDescription);
