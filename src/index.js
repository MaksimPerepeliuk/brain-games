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
      return;
    }

    const { gameQuestion, correctAnswer } = getGameData();
    const userAnswer = readlineSync.question(`Question: ${gameQuestion}: `);
    if (userAnswer === `${correctAnswer}`) {
      console.log('Correct!');
      iter(counter + 1);
      return;
    }

    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
  };

  return iter(0);
};
