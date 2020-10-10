const kelvin = 298; //The temp for the day in kelvin
var celsius = kelvin - 273; // converting our kelvin temp to celsius
var newton = celsius * (33/100);
var farenheit = celsius * (9/5) + 32; // coverts the temp into farenheit

Math.floor(farenheit); //Rounding the temp to a whole number
Math.floor(newton);

console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${farenheit} degrees Farenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${newton} degrees Newton`);
