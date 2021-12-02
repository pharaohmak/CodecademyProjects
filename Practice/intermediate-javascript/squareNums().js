/*
squareNums()

Instructions
1. Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!

Hint
If you need a refresher on .map(), check out our .map() exercise and the MDN documentation

Your function should have an array parameter. You’ll invoke map() on the array passed in. What should you pass as an argument to .map()?

We wrote a function toSquare() that you might find useful…
*/

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(toSquare)

 console.log(numbers)

