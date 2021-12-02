/*
reportingForDuty()

Instructions
1. Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

reportingForDuty('Private', 'Fido')
// Should return 'Private Fido reporting for duty!'

Hint
You’ll need to return a single string. You can use concatenation (string1 + " " + string2) or string interpolation (`${string1} ${string2}`) to accomplish this.
*/

// Write your function here:
const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
}

console.log(reportingForDuty('Pharaoh', 'Mak'))


// Uncomment the line below when you're ready to try out your function
// console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!
