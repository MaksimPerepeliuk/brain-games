import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (getGameData, description) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return 'you win'; // вернул значение т.к. линтер ругается если не возвращать ничего
    }

    const { gameQuestion, correctAnswer } = getGameData();
    const userAnswer = readlineSync.question(`Question: ${gameQuestion}: `);
    if (userAnswer === `${correctAnswer}`) {
      console.log('Correct!');
      return iter(counter + 1);
    }

    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return 'you lose'; // вернул значение т.к. линтер ругается если не возвращать ничего
  };

  return iter(0);
};
