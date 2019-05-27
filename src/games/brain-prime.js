export const getRandomValue = () => Math.floor(Math.random() * 50);

export const getCorrectAnswer = (randomValue) => {
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
