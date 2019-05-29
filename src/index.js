import readlineSync from 'readline-sync';

export default (randomValueAndCorrectAnswer, rules, roundsCount = 3) => {
  console.log(`Welcome to the Brain Games!\n${rules}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const iter = (acc) => {
    if (acc === roundsCount) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const random = randomValueAndCorrectAnswer();
    const userAnswer = readlineSync.question(`Question: ${random.question}: `);
    const correctAnswer = `${random.correct}`;
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }

    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  };

  return iter(0, 3);
};
