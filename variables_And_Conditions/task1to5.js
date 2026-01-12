// 1. Store your name, age, and favorite hobby in variables and print a sentence using them.
let name = 'Bhargav'
let age =20
let hobby = "listening songs"
console.log("My name is " + name + "and i am "+ age + " years old" + " and my hobby is " + hobby)

//2. Store a temperature in Celsius and convert it to Fahrenheit using a formula.
let celsius = 30
let ferenhit = (9/5 * celsius) +32
console.log (` tempratuare in ${celsius} celsius equvalent to the value in terms of ${ferenhit} ferenhit. `)

// 3. Declare a variable for your bank balance. Simulate a deposit and a withdrawal. Show the updated balance.
let bankBalance =1000;
let depositValue = 500;
let newBankBalance =bankBalance +depositValue;
console.log("bank balance currently is " + bankBalance + " before deposit" )
console.log ("new bank balance " +newBankBalance + " after deposit " +depositValue)
let withdrawalValue =1000;
console.log("bank balance currently is " + newBankBalance + " before withdrawal" )
newBankBalance = newBankBalance -withdrawalValue;
console.log ("new bank balance " +newBankBalance + " after withdrawal " + withdrawalValue)

// 4. Create 5 variables with meaningful names representing real-world objects or data.
let fullName ="Bhargav Modi"
let rollNO  = 41
let favColor = 'black'
let isAvailable = true
let  rent = 2200

// 5. Use var, let, and const in a block scope and global scope. Log their values inside and outside the block.
// Global scope
var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

{
    // Block scope
    var blockVar = "I am block var";
    let blockLet = "I am block let";
    const blockConst = "I am block const";

    console.log("Inside block:");
    console.log(globalVar);     
    console.log(globalLet);     
    console.log(globalConst);   
    console.log(blockVar);      
    console.log(blockLet);     
    console.log(blockConst);   
}

console.log("\nOutside block:");
console.log(globalVar);   
console.log(globalLet);   
console.log(globalConst);
console.log(blockVar);    

//  Errors 
// console.log(blockLet);   
// / console.log(blockConst); 
