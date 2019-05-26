export const getRandomValue = () => {
  const randomNum1 = Math.floor(Math.random() * 50);
  const randomNum2 = Math.floor(Math.random() * 50);

  return `${randomNum1} ${randomNum2}`;
};

export const getCorrectAnswer = (randomValue) => {
  const arr = randomValue.split(' ');
  const [num1, num2] = arr;
  const iter = (acc) => {
    if (num1 % acc === 0 && num2 % acc === 0) {
      return acc;
    }

    return iter(acc - 1);
  };

  return iter(num1);
};
