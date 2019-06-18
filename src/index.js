import readlineSync from 'readline-sync';

export default (getGameData, description) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const roundsCount = 3;
  const iter = (counter) => {
    if (counter === roundsCount) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const { question, correctAnswer } = getGameData();
    const userAnswer = readlineSync.question(`Question: ${question}: `);
    if (userAnswer === `${correctAnswer}`) {
      console.log('Correct!');
      return iter(counter + 1);
    }

    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  };

  return iter(0);
};
