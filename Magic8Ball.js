let userName = 'Wyatt';
let userQuestion = 'Will I be a good programmer?';
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

userName === '' ? console.log("Hello!") : console.log('Hello ' + userName+ '!');

console.log(userName + ', you have asked the magic 8 ball: '+userQuestion); 

switch(randomNumber){ //assign 8 ball to a phrase
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
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
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
    default:
      eightBall = 'Busy, please ask again';
      break;
}
console.log('Your reading says ~ '+eightBall);
