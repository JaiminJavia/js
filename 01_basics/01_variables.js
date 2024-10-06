const accountId = 14343;
let accountEmail = "google@google.com";
var accountPassword = "12344";
accountCity = "surat"; // NEVER USE THIS WAY 

let accountState;
console.log(accountState); // undefined 

// accountId = 2 //changing value of const variable is not allowed
/*
PREFER NOT TO USE VAR
BECAUSE OF ISSUE IN BLOCK SCOPE N FUNCTIONAL SCOPE
*/
accountEmail = "GG@gg.com";
accountCity = "ahmedabad";
accountPassword ="34334";
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
