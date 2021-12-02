/*
howOld()

Instructions
1. Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'

Hint
You might find these two variables helpful:

const yearDifference = year - theCurrentYear
const newAge = age + yearDifference
Once you have newAge, you’ll be able to handle the three difference cases.

If the newAge is less than 0, this means the year provided was before the person was born. If the newAge is greater than their current age, this means the year passed in is in the future. Otherwise, we know the year provided was in the past but not before they were born.
*/

/*
Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

const howOld = (age, year) => {
// The following two lines make it so that our function always knows the current year.
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
// It is totally ok if your function used the current year directly!

    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}
