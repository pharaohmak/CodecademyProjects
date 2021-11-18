let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

secretMessage.pop();
//remove last element

console.log(secretMessage.length);
//get length of array

secretMessage.push('to', 'Program');
//add elemnts to end of array

console.log(secretMessage.length);

console.log(secretMessage.indexOf('easily'))
    //get index of element

secretMessage[7] = 'right';
//change element accessing index

console.log(secretMessage.length);
console.log(secretMessage[7])

secretMessage.shift();
// remove first element

secretMessage.splice(6, 10, 'know')
    //remove element and replace

console.log(secretMessage.length);

console.log(secretMessage.join(' '));