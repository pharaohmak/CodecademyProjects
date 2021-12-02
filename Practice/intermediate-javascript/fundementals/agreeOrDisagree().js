/* 
agreeOrDisagree()

Instructions
1. Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

Hint <br>
You might use a condition like:

if (first === second)
where first and second are your function’s parameters
*/

// Write your function here:
const agreeOrDisagree = (string1, string2) => {
  if(string1 === string2) {
    return 'You agree!';
  } else {
    return 'You disagree!';
  }
}


// Uncomment the line below when you're ready to try out your function
// console.log(agreeOrDisagree("yep", "yep"))
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!
