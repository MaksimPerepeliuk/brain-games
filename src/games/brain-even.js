export const getRandomValue = () => Math.floor(Math.random() * 50);

export const getCorrectAnswer = (randomValue) => {
  const correctAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};
