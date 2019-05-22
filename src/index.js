import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 50);
const isEven = num => num % 2 === 0;

export default () => {
  console.log(`Welcome to the Brain Games! 
  Answer 'yes' if number even otherwise answer 'no'.\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const randomNum = getRandomNumber();
    const userAnswer = readlineSync.question(`${randomNum}: `);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (correctAnswer === userAnswer) {
      console.log('correct!');
      return iter(acc + 1);
    }

    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, Bill!`);

    return iter(acc);
  };

  return iter(0);
};
