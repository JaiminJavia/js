/* on basis of how memory is used in storing data we have categorize dataypes in 2 type primitive and non-primitive*/

//PRIMITIVE - ITS CALL BY VALUE
//7 TYPES : STRING,NUMBER,BOOLEAN,NULL,UNDEFINED,SYMBOL,BigInt

//NON-PRIMTIVE/REFERENCE TYPE - IN MEMORY WE ALLOT REFERENCE
//ARRAY,OBJECTS,FUNCTIONS

/*JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly*/

console.log(typeof null);//object
console.log(typeof undefined);//undefine

/***********************************MEMORY****************************************************/

//STACK(PRIMITIVE)->WE GET COPY OF VARIABLE  HEAP (NON-PRIMITIVE)->WE GET REFERENCE OF THAT STORED VARIABLE