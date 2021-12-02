/*
declineEverything() and acceptEverything()

Instructions
1. Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array!

Hint
If you need a refresher on .forEach(), check out this exercise and the MDN documentation.

Your function should have an array parameter. You’ll invoke forEach() on the array passed in. What should your argument for the forEach() function be?

Take note that we want politelyDeclined() passed in directly as the argument to .forEach(). Here’s an example of code that WILL NOT pass our tests:

const declineEverything = arr => {
  arr.forEach(element => politelyDecline(element));
}

2. Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!

Hint
.forEach() is quite convenient… If you wanted to use a named function, it might look like this:

const grudginglyAccept = (veg) => {
    console.log('Ok, I guess I will eat some ' + veg + '.');
}
If your code isn’t passing after a few tries, test it with a new array. It’s possible your function seems like it’s working but isn’t.declineEverything() and acceptEverything()

Instructions
1. Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array!

Hint
If you need a refresher on .forEach(), check out this exercise and the MDN documentation.

Your function should have an array parameter. You’ll invoke forEach() on the array passed in. What should your argument for the forEach() function be?

Take note that we want politelyDeclined() passed in directly as the argument to .forEach(). Here’s an example of code that WILL NOT pass our tests:

const declineEverything = arr => {
  arr.forEach(element => politelyDecline(element));
}

2. Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!

Hint
.forEach() is quite convenient… If you wanted to use a named function, it might look like this:

const grudginglyAccept = (veg) => {
    console.log('Ok, I guess I will eat some ' + veg + '.');
}
If your code isn’t passing after a few tries, test it with a new array. It’s possible your function seems like it’s working but isn’t.
*/

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => {
  arr.forEach(politelyDecline);
}

const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  });
}

console.log(acceptEverything(veggies))

