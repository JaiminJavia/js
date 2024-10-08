//singleton 

//object literals
//Object.create //constructor method //singleton method

const mySym = Symbol("key1");

const JsUser = {
    name:"Donald",
    "full name":"donald trump",// can never access this values using . (dot)
    age:19,
    [mySym]:"mykey1",
    location:"Chicago",
    email:"google@google.com",
    isLoggedIn: false,
    lastLoginDays:["mon","tues"]
}

//  2 ways 
//console.log(JsUser.email);//one way
//console.log(JsUser["email"]);//2nd way
//console.log(JsUser["full name"]);

JsUser.email = "google@chatgt.com"
//Object.freeze(JsUser)//applies lock
JsUser.email = "google@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("welcome js user");
}
JsUser.greetingTwo = function(){
    console.log(`welcome js ${this["full name"]}`);
}


console.log(JsUser.greetingTwo());
