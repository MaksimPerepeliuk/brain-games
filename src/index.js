import readlineSync from 'readline-sync';

export default (randomValue, getCorrectAnswer, rules) => {
  console.log(`Welcome to the Brain Games!\n${rules}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const random = randomValue();
    const userAnswer = readlineSync.question(`Question: ${random}: `);
    const correctAnswer = `${getCorrectAnswer(random)}`;
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }

    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  };

  return iter(0);
};
