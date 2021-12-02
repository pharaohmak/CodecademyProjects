/*
truthyOrFalsy()

Instructions
1. It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.


Hint
You might find this condition helpful:

if (value) {
  // Do something here
}

With this condition, if the value evaluates to something truthy, the block of code that follows will execute.

For your function, what would you want to do in that block of code?
*/

// Write your function here:
const truthyOrFalsy = value => {
  if(value) {
    return true;
  } else {
    return false;
  }
}


// Uncomment the line below when you're ready to try out your function
// console.log(truthyOrFalsy(0)) // Should print false

// We encourage you to add more function calls of your own to test your code!






