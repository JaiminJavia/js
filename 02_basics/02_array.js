const marvel_heros = ["thor","spiderman","ironman"];
const dc_heros = ["superman","flash","batman"];
//marvel_heros.push(dc_heros);//push pushes element in current array
//console.log(marvel_heros);//[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ] gives array inside array
//console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)//concat returns new array
//console.log(all_heros);//[ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...all_heros,...dc_heros];//spread operator
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("donald"));
const ob = {
    name:"donald",
    country:"US"
}
console.log(Array.from("donald"));//convert to array from strings,object
console.log(Array.from(Object.entries(ob)))//[ [ 'name', 'donald' ], [ 'country', 'US' ] ]
console.log(Array.from(Object.keys(ob)));//[ 'name', 'country' ]
console.log(Array.from(Object.values(ob)));//[ 'donald', 'US' ]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ] //Returns a new array from a set of elements.




