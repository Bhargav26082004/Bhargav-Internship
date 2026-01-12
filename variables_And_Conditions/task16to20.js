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
