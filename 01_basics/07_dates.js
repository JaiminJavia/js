//Dates
const myDate = new Date();
// console.log(myDate);//2024-10-07T17:42:41.443Z
// console.log(myDate.toString());//Mon Oct 07 2024 17:42:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Mon Oct 07 2024
// console.log(myDate.toLocaleString());//10/7/2024, 5:41:24 PM
// console.log(myDate.toJSON());//2024-10-07T17:41:56.217Z
// console.log(myDate.toLocaleDateString());//10/7/2024
// console.log(typeof myDate);//object


//let myCreatedDate = new Date(2024,1,23,5,4)
let myCreatedDate = new Date("2024-01-19")
//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());//month starts from 0 in javascript
console.log(myCreatedDate.toLocaleString())//2/23/2024, 5:04:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);//milisecond
console.log(myCreatedDate.getTime());//1705622400000
console.log(Math.floor(Date.now()/1000));//gives second


