let userName = 'Mak';

userName ? console.log(`Hello, ${userName}!`) :
    console.log('Hello!');

const userQuestion = 'Will I become a successful Software Engineer?';
console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

eightBall += randomNumber;

console.log(`The eight ball answered: ${eightBall}`);

switch (randomNumber) {
    case 0:
        console.log('Outlook not so good');
        break;
    case 1:
        console.log('It is certain');
        break;
    case 2:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply hazy try again');
        break;
    case 4:
        console.log('i have a good feeling');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('Indubedabely');
        break;
    case 7:
        console.log('Outlook not so good');
        break;
    case 8:
        console.log('Signs point to yes');
        break;

    default:
        console.log(`The eight ball answered: ${eightBall}`);
}