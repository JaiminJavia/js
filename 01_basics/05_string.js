const name = "donald";
const repoCount = 50;

//console.log(name+repoCount+"value");//old way dont use this way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//new way to declare string

const gameName = new String("SUPER-MARIO")


console.log(gameName.charAt(2));
console.log(gameName.indexOf("l"));

const newString = gameName.substring(0,4)//it only starts with 0 even if u give negative it will ignore
console.log(newString); //SUPE (4th is ignore its till 3 only)



const anotherString = gameName.slice(-11,4) //here we can give negative length as well
console.log(anotherString);


const newStringOne = "   donald      "
console.log(newStringOne.trim());


const url = "https://www.google.com/donald%20trump"

console.log(url.replace("%20","-"))
console.log(url.includes("trump"));

console.log(gameName.split("").join(""));//[ 'SUPER', 'MARIO' ]

