/*
shoutGreetings()

Instructions
1. Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!

Hint
.map() could prove handy here, but a for loop would work just fine!

You might also be interested in a certain string built-in method:

console.log('ilovecoding'.toUpperCase());
// Prints 'ILOVECODING'
*/

// Write your code here:
const shoutGreetings = arr => {
  let shoutArray = []
  for(let i = 0; i<arr.length; i++){
      shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

