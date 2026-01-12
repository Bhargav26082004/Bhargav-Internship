//  11. Convert two number strings to actual numbers and add them.
let val1 = "13"
let val2 = "25"
let addition = Number(val1) + Number(val2)
console.log("addition of two string with converting into number is : ",addition);
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