// // 1. Store your name, age, and favorite hobby in variables and print a sentence using them.
// let name = 'Bhargav'
// let age =20
// let hobby = "listening songs"
// console.log("My name is " + name + "and i am "+ age + " years old" + " and my hobby is " + hobby)
// .......................................
// //2. Store a temperature in Celsius and convert it to Fahrenheit using a formula.
// let celsius = 30
// let ferenhit = (9/5 * celsius) +32
// console.log (` tempratuare in ${celsius} celsius equvalent to the value in terms of ${ferenhit} ferenhit. `)
// ......................................
// // 3. Declare a variable for your bank balance. Simulate a deposit and a withdrawal. Show the updated balance.
// let bankBalance =1000;
// let depositValue = 500;
// let newBankBalance =bankBalance +depositValue;
// console.log("bank balance currently is " + bankBalance + " before deposit" )
// console.log ("new bank balance " +newBankBalance + " after deposit " +depositValue)
// let withdrawalValue =1000;
// console.log("bank balance currently is " + newBankBalance + " before withdrawal" )
// newBankBalance = newBankBalance -withdrawalValue;
// console.log ("new bank balance " +newBankBalance + " after withdrawal " + withdrawalValue)
// ........................................
// // 4. Create 5 variables with meaningful names representing real-world objects or data.
// let fullName ="Bhargav Modi"
// let rollNO  = 41
// let favColor = 'black'
// let isAvailable = true
// let  rent = 2200
// .........................................
// // 5. Use var, let, and const in a block scope and global scope. Log their values inside and outside the block.
// // Global scope
// var globalVar = "I am global var";
// let globalLet = "I am global let";
// const globalConst = "I am global const";

// {
//     // Block scope
//     var blockVar = "I am block var";
//     let blockLet = "I am block let";
//     const blockConst = "I am block const";

//     console.log("Inside block:");
//     console.log(globalVar);     
//     console.log(globalLet);     
//     console.log(globalConst);   
//     console.log(blockVar);      
//     console.log(blockLet);     
//     console.log(blockConst);   
// }

// console.log("\nOutside block:");
// console.log(globalVar);   
// console.log(globalLet);   
// console.log(globalConst);
// console.log(blockVar);    

// //  Errors 
// // console.log(blockLet);   
// // / console.log(blockConst); 
//....................................
// // 6.Create a const array and try adding new items to it.
// const fruits = ["apple","banana","strawberry"]
// fruits.push("mango")
// console.log(fruits)
// ..........................
// // 7. Try reassigning variables declared with let and const.

// // Using let
// let count = 10;
// console.log("Initial count:", count);

// count = 20; 
// console.log("After reassignment:", count);

// // Using const
// const pi = 3.14;
// console.log("Initial pi:", pi);

// // pi = 22/7(error)


// 8. Declare variables of each type: string, number, boolean, object, array, null, undefined. Use typeof to log each type.
// let Name ="bhargav"
// console.log( "type of string :" +typeof(Name))
// let Age =21
// console.log("\ntype of number : " +typeof(Age))
// let isReading = true
// console.log(" \ntype of boolean : " + typeof(isReading))
// let student = {
//     name :"yash",
//     grade : "A",
//     blood  : "0+"

// }
// console.log(" \ntype of object : " + typeof(student))
// let marks = [80,75,90]
// console.log(" \ntype of array : "  + typeof(marks))
// let value = null
// console.log(" \ntype of null : "+ typeof(value))
// let val =undefined
// console.log(" \ntype of val : ", + typeof(val)) 
// ..................
// 9. Create an object to represent a book: title, author, year, and a boolean for if it’s read. Log the object.
// let book = {
//     title : "Game Of Thrones",
//     author : "RR Martin",
//     year :2000,
//     isRead : true,
// }
// console.log("printing object \n book : ",book)
// ..................
// 10. Make an array that includes a number, string, boolean, object, and another array. Log each item.

// const mixedArray = [
//   25,                     
//   "Hello JavaScript",    
//    true,                  
//   { name: "Bhargav", age: 21 }, 
//   [1, 2, 3, 4]            
// ];

// // printing 
// console.log( "printing mix array value for index "+0 + " is :"+mixedArray[0]); 
// console.log( "printing mix array value for index "+1 + " is :"+mixedArray[1]); 
// console.log( "printing mix array value for index "+2+ " is :"+mixedArray[2]); 
// console.log( "printing mix array value for index "+3+ " is :"+mixedArray[3]); 
// console.log( "printing mix array value for index "+4+ " is :"+mixedArray[4]); 
// // ...........................
//  11. Convert two number strings to actual numbers and add them.
// let val1 = "13"
// let val2 = "25"
// let addition = Number(val1) + Number(val2)
// console.log("addition of two string with converting into number is : ",addition);
// ..............
// 12. Convert a number to a string, concatenate it with other text, and log the result.
let num1 =10
let num2 =20
let str = String(num1)+String(num2)
console.log("string conversion of two numbers :",str)

// 13. Use Boolean() to convert different values (0, 1, "", "hello", null, undefined) and log the results
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(null));
console.log(Boolean(undefined));
// 14. Given a variable with user input as a string, check if it's a valid number using isNaN() and convert it. 
let userInput = prompt("Enter a number");

if (userInput !== null  && !isNaN(userInput)) {
  let number = Number(userInput);
  console.log(number);
} else {
  console.log("Invalid input");
}
// 15. Use if-else to categorize a person based on age: child, teen, adult, senior. 
let age = Number(prompt("Enter age"));

if (age >= 0 && age <= 12) {
  console.log("child");
} else if (age >= 13 && age <= 19) {
  console.log("teen");
} else if (age >= 20 && age <= 30) {
  console.log("adult");
} else if (age >= 31) {
  console.log("senior");
} else {
  console.log("invalid age");
}
// 16. Take a number and determine if it is even or odd using %.
let number = Number(prompt("Enter a number"));

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}


// 17. Declare variables for stored username/password. Compare with user input and print login success or failure.

let storedUsername = "admin";
let storedPassword = "1234";

let inputUsername = prompt("Enter username");
let inputPassword = prompt("Enter password");

if (inputUsername === storedUsername && inputPassword === storedPassword) {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

// 18. If purchase amount is over $100, apply a 10% discount. Otherwise, apply 5%. Show the final price
let amount = Number(prompt("Enter purchase amount"));


if (amount > 100) {
  amount = amount - amount * 10/100;
} else {
  amount = amount - amount * 5/100;
}

console.log(amount);
// 19. Take a score and assign a grade: A (90+), B (80–89), C (70–79), D (60–69), F (below 60).
let score = Number(prompt("Enter score"));

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
// 
// 20. Based on a variable storing the color ("red", "yellow", "green"), print a message for what to do ("Stop", "Slow down", "Go").
let color = prompt("Enter traffic light color")?.toLowerCase();

if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Slow down");
} else if (color === "green") {
  console.log("Go");
} else {
  console.log("Invalid color");
}
