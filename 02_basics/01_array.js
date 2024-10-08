//array
const myArr = [0,25,51,84,65,88];
//shallow copy - share same refernce
//deep copy - dont share same reference
const arr2 = new Array(1,2,3,4,5)


//array methods
myArr.push(6);
myArr.push();//removes last element
//console.log(myArr);

myArr.unshift(5555);//adds element in the begining of array
//console.log(myArr);
myArr.shift()//removes element from start
//console.log(myArr);


// console.log(myArr.includes(25));//true
// console.log(myArr.indexOf(25));//1

const newArr = myArr.join()//Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(newArr);

//SPLICE AND SLICE

console.log("A ",myArr);
const myn1 = myArr.slice(1,4);
console.log(myn1);
console.log("B ",myArr);
const myn2 = myArr.splice(1,4);
console.log("C ",myArr);
console.log(myn2);

///difference between slice and splice 
//splice excludes last index where as splice includes last index(1,5) it prints from 1 to 5 where as slice prints 1 to 4 
//2nd big difference is slice doesnt make changes to original array where as after using splice original array elements are removed/changed


