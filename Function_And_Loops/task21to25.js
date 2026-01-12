// 21. Write a function that take a number and checks if it is a prime number or not. example: 5, 7 is prime numbers


let userInput = prompt("enter a number you want to check for prime  number:")
userInput = Number(userInput);
function isPrime(num) {

    if(isNaN(num) || num<=1) {
        return 0;
    }
    
    if(num===2) {
        return 1;
    }
    for(let i =2;i<num;i++) {
            if(num%i === 0) {
                return 0;
            }
    }
    return 1;
} 
if(isPrime(userInput)) {
    console.log("given  number is prime ")
}
else {
    console.log("given number is not prime number")
}
// 22. Write a function that take a number and checks if it is a pallindrom number or not. example: 35253, 5151515 is pallindrom number
let palindromeNum = prompt("Enter a number to check palindrome:");
palindromeNum = Number(palindromeNum);

function isPalindrome(num) {

    if (isNaN(num) || num < 0) {
        return "Please enter a valid positive number";
    }

    let reverse = 0;
    let temp = num;

    while (temp > 0) {
        let lastDigit = temp % 10;
        reverse = reverse * 10 + lastDigit;
        temp = Math.floor(temp / 10); 
    }

    return reverse === num;
}

let palindromeResult = isPalindrome(palindromeNum);

if (typeof palindromeResult === "string") {
    console.log(result);
}
else if (palindromeResult) {
    console.log(palindromeNum + " is a palindrome number");
}
else {
    console.log(palindromeNum + " is not a palindrome number");
}
// 23. Write a JavaScript loop to calculate the digital root of a number without using arrays, objects, or strings. The digital root of a number is the single-digit value obtained by an iterative process of summing its digits until a single digit is reached.
let user = prompt("Enter a number for digital root:");
user = Number(user);

function digitalroot(num) {

    if (isNaN(num) || num < 0) {
        return "Please enter a valid positive number";
    }

    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let lastDigit = temp % 10;
        sum = sum + lastDigit;
        temp = Math.floor(temp / 10);
    }

    let digroot = sum;

    while (digroot >= 10) {
        let digsum = 0;

        while (digroot > 0) {
            let lastdigroot = digroot % 10;
            digsum = digsum + lastdigroot;
            digroot = Math.floor(digroot / 10);
        }

        digroot = digsum; 
    }

    return digroot;
}

let result = digitalroot(user);

if (typeof result === "string") {
    console.log(result);
} else {
    console.log(result + " is the digital root of " + user);
}
// 24. Write a JavaScript loop to print the first 10 numbers in the Fibonacci sequence, but instead of using arrays or recursion, store only the last two Fibonacci numbers in variables.
function Fibonacci (num) {
    
      let first = 0;
      let second =1;
      let count = 0;
        let third = 0;
    while(count < num) {
        third = first + second;
        first = second;
        second = third;
        count++;
        if(count === num-2) {
            console.log('second last value is ' + first)
            console.log ("last value is " + second)
        }

    }
}
Fibonacci(10);


// 25. Write a function that takes a number and checks if it is a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself). For example, 6 is a perfect number because 1 + 2 + 3 = 6.
let Input = prompt("Enter a number to check perfect number:");
Input = Number(Input);

function isPerfNum(num) {

    if (isNaN(num) || num < 1) {
        return "Enter a valid number";
    }

    if (num === 1) {
        return false;
    }

    let sum = 1;

    for (let i = 2; i < num ; i++) {
        if (num % i === 0) {
            sum =  sum + i;
        }
    }

    return sum === num;
}

let val = isPerfNum(Input);

if (typeof val === "string") {
    console.log(val);
} 
else if (val) {
    console.log(`The given number ${Input} is a perfect number`);
} 
else {
    console.log(`The given number ${Input} is not a perfect number`);
}
