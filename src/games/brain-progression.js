const getStrWithHideRandomNum = (series) => {
  const seriesArr = series;
  const randomIndex = Math.floor(Math.random() * series.length);
  seriesArr[randomIndex] = '..';
  const stringFromSeries = series.join(' ');

  return stringFromSeries;
};

export const getSeriesNumber = () => {
  const startNum = Math.floor(Math.random() * 20);
  const stepProgression = Math.floor(Math.random() * 50);
  const iter = (stepNum, acc) => {
    if (acc.length === 10) {
      return getStrWithHideRandomNum(acc);
    }

    return iter(stepNum + stepProgression, [...acc, stepNum]);
  };

  return iter(startNum + stepProgression, [startNum]);
};

export const getCorrectAnswer = (seriesNum) => {
  const seriesNumArr = seriesNum.split(' ');
  const hideNumIndex = seriesNumArr.indexOf('..');
  const arrWithoutHide = seriesNumArr.filter(elem => elem !== '..');
  const stepProgression = arrWithoutHide[1] - arrWithoutHide[0];
  if (hideNumIndex === 0) {
    return seriesNumArr[1] - stepProgression;
  }

  return Number(seriesNumArr[hideNumIndex - 1]) + stepProgression;
};
