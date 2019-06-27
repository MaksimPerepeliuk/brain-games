import makeGame from '..';
import getRandomValue from '../random';

const progressionLength = 10;

const getGameData = () => {
  const startProgression = getRandomValue();
  const stepProgression = getRandomValue();
  const hiddenElem = getRandomValue(0, progressionLength - 1);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = startProgression + stepProgression * i;
  }

  const correctAnswer = progression[hiddenElem];
  progression[hiddenElem] = '..';
  const gameQuestion = progression.join(' ');

  return { gameQuestion, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export default () => makeGame(getGameData, gameDescription);
