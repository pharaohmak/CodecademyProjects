/*
toEmoticon()

Instructions
1. Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'


Hint
A switch case takes the format:

switch (expression) {
    case "firstCase":
    // Do something
    case "secondCase":
    // Do something
    default:
    // Do something
}
*/

// Write your function here:
const toEmoticon = string => {
  switch(string) {
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break;
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
  }
}


// Uncomment the line below when you're ready to try out your function
// console.log(toEmoticon("whatever"))
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
