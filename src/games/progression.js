import makeGame from '..';
import getRandomValue from '../random';

const progressionLength = 10;

const makeGameData = (prog, randomIndex) => {
  const progression = prog;
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const gameQuestion = progression.join(' ');

  return { gameQuestion, correctAnswer };
};

const makeProgression = (startProgression, stepProgression) => {
  const nextProgValue = startProgression + stepProgression;
  const iter = (progressionElem, acc) => {
    if (acc.length === progressionLength) {
      return acc;
    }

    return iter(progressionElem + stepProgression, [...acc, progressionElem]);
  };

  return iter(nextProgValue, [startProgression]);
};

const getGameData = () => {
  const startProgression = getRandomValue();
  const stepProgression = getRandomValue();
  const progression = makeProgression(startProgression, stepProgression, progressionLength);
  const randomIndex = getRandomValue(0, progression.length - 1);

  return makeGameData(progression, randomIndex);
};

const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(getGameData, gameDescription);
