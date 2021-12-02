/*
Fix The Broken Code!

Instructions
1. We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than the current element before using .push() to add it to results.

It’s not doing what we want. Can you fix our code, please?

Hint
Hmmm, we have nested loops here. The problem with our code has to do with scope. Within the scope of our function two variables are stepping on each other’s toes and changing our expected outcome.

Any idea where we might have gone wrong? Check our loops carefully…

There’s something up with that i. Try to console.log(i) at different points in the code, and see if it matches up to what you expect.

Refer back to our JavaScript exercise for an example on how to use nested loops in your code.
*/

var numbers = [5, 3, 9, 30];

var smallestPowerOfTwo = arr => {

    var results = [];
    // The 'outer' for loop - loops through each element in the array
    for (var i = 0; i < arr.length; i++) {
        number = arr[i];

        // The 'inner' while loop - searches for smallest power of 2 greater than the given number
        var j = 1;
        while (j < number) {
            j = j * 2;
        }
        results.push(j);
    }
    return results;
    console.log(i);
};
console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]