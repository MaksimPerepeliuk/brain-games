import makeGame from '..';
import getRandomValue from '../random';

const getStrWithHideRandomNum = (series) => {
  const seriesArr = series;
  const randomIndex = Math.floor(Math.random() * series.length);
  const hideNum = seriesArr[randomIndex];
  seriesArr[randomIndex] = '..';
  const stringFromSeries = series.join(' ');

  return { question: stringFromSeries, correct: hideNum };
};

const getSeriesNumber = () => {
  const startNum = getRandomValue();
  const stepProgression = getRandomValue();
  const iter = (stepNum, acc) => {
    if (acc.length === 10) {
      return getStrWithHideRandomNum(acc);
    }

    return iter(stepNum + stepProgression, [...acc, stepNum]);
  };

  return iter(startNum + stepProgression, [startNum]);
};

export default makeGame(getSeriesNumber, 'What number is missing in the progression?');
