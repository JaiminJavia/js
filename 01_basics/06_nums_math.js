const score = 400
console.log(score);
const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));//100.00


const otherNumber = 23.8973;
console.log(otherNumber.toPrecision(3));

const hundredes = 1000000
console.log(hundredes.toLocaleString(`en-IN`));


//*********************MATHS************************* */

console.log(Math);
console.log(Math.abs);//absolute value converts negative to positive and postive to positive
console.log(Math.round(4.3))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.3))


console.log(Math.random()) // it always gives values between 0 and 1;
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)
