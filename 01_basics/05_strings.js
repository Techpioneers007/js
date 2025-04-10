const name = "John Doe";
const repoCount= 30;

//console.log(name + " has " + repoCount + " repositories.");

console.log(`${name} has ${repoCount} repositories.`); // Template literals

const gameName = new String('Call-of-Duty')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('8'));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4) //in substring we cannot gives negative value,it will ignor and start from "0".
console.log(newString);

const anotherSring = gameName.slice(-8,4)
console.log(anotherSring);

const newStringone = "  sambhav   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://sambhav.com/sambhav77sharma"

console.log (url.replace('77','_'))

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));