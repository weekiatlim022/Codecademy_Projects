//the value saved to kelvin will stay constant.
const kelvin = 0;
//substracting 273 from the kelvin variable.
const celsius = kelvin - 273;
//calculate Fahrenheit
let fahrenheit = celsius *(9/5) + 32;
//round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
//convert to Netwon
let netwon = celsius * (33/100);
//Round down
netwon = Math.floor(netwon);
console.log(`The temperature is ${netwon} degrees Netwon.`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

