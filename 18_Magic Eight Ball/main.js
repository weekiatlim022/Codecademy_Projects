let userName = '';
userName ? console.log(`Hello, ${username}!`) : console.log('Hello!');

const userQuestion = 'what is today?';
console.log(`${userName} ask: ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default: 
    console.log('Invalid');
    break;
}

console.log(eightBall);