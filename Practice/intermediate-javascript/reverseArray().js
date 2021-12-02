/*
reverseArray()

Instructions
1. Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];

reverseArray(sentence);
//Should return ['This', 'will', 'all', 'make', 'sense.'];

Hint
It might be fun to loop backwards:

for (let i = arr.length-1; i >= 0; i--)
or you could us
*/

// Write your code here:
const reverseArray = arr => {
  let reversed = [];
  for(let i = arr.length -1; i >= 0; i--){
    reversed.push(arr[i])
  }
      return reversed;
};


// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];


