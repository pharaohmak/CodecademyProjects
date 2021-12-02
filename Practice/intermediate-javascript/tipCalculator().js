/*
tipCalculator()

Instructions
1. Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20

Hint
A good way to calculate a percentage is by multiplying it by the percentage divided by 100.

20% of X = X * .20

For this problem, you may choose to use either a switch or multiple if‘s. A switch case takes the format:

switch (expression) {
    case "firstCase":
    // Do something
    case "secondCase":
    // Do something
    default:
    // Do something
*/

// Write your function here:
const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * .05;
            break;
        case 'ok':
            return total * .15;
            break;
        case 'good':
            return total * .20;
            break;
        case 'excellent':
            return total * .30;
            break;
        default:
            return total * .18;
    }



    // Uncomment the line below when you're ready to try out your function
    // console.log(tipCalculator('good', 100)) //should return 20

    // We encourage you to add more function calls of your own to test your code!

}