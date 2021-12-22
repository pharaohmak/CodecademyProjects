// todays forcast in kelvin
const kelvin = 0;

//convert kelvin to celsius
let celsius = kelvin - 273;

// convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// round down fahrenheit rempreture
fahrenheit = Math.floor(fahrenheit);

console.log(`The tempreture is ${fahrenheit} degrees Fahrenheit.`);