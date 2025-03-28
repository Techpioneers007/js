const accountId = 14453
let accountEmail = "sambhav@goggle.com"
var accountPassword ='12345'
accountCity = "japan"
let accountState;

//accountId = 2// not allowed

accountEmail = "sambhav@hc.com"
accountPassword = '23415'
accountCity = "india"

console.log(accountId);


/*
prefer not to use var
because of issue in the block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

