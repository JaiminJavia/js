//const tinderUser = new Object();//singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "samii";
tinderUser.isLoggedIn = "false"


//console.log(tinderUser);

const regularUser = {
    email:"some@email.com",
    fullName:{
        userfullname:{
            firstName:"donald",
            lastName:"trump"
        }
    }
}
//console.log(regularUser.fullName.userfullname);


const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = {
//     obj1,obj2
// }////{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign({},obj1,obj2)// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = {...obj1,...obj2}//spread operator
// console.log(obj3);

const userss = [
    {
        id:"1",
        name:"2"
    },
    {
        id:"3",
        name:"4"
    },
    {
        id:"5",
        name:"6"
    }
]

console.log(userss[0].id,userss[0].name);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//to check whether some property exist or not in object

const course = {
    courseName:"JS",
    price:999,
    instructor:"donald Trump"
}

const {courseName} = course;
console.log(courseName);
