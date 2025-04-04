// primitive 

// 7 types : String, Number , Boolean, Null ,Undefined, Symbol, BigInt 

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 345678899856445678324n 


 
// Reference (Non-Primitive)

// Array,Objects, Functions

const heros = ["Eren","Naruto","Asta"]
let myObj = {
    name: "sam",
    age:20,
}

const myFunction = function(){
    console.log("Konnichiwa");
}

console.log(typeof myFunction);
