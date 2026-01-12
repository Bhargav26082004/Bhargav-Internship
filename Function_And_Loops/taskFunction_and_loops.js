// 1. Write a function called greet that takes a name as a parameter and logs a greeting message.
// let userInput =prompt("enter your name ")
// function greeting(name) 
// {
//     console.log("good morning "+name)
// }
// greeting(userInput);
// ......................................................
// 2. Write a function that takes a string representing a number (e.g., "42") and converts it to an actual number. Then, check if the number is greater than 50 and return a corresponding message.
// let number = prompt("enter a number ")
// function strTONum(number){



//     if(!isNaN(number) && number!==null){
//         let num = Number(number)
//         console.log("your number is "+ num)
//         if(num>50)
//         {
//             console.log("your number is greater than 50")
//         }
//         else{
//             console.log("your number is less than or equal to 50")
//         }
//     }
// }
// strTONum(number);

// ......................................................
// 3. Write a function that accepts a string with a number and converts it to a floating-point number. Return the result of multiplying the number by 2.
// let number = prompt("entr a number :")
// function floatmul(number){
// if(!isNaN(number) && number!==null){
//         let num = parseFloat(number)
//         let newVal = num * 2;
//         console.log("multiplication of given number " + num + " is "+newVal);

// }
// }
// floatmul(number);

// ......................................................
// 4. Create a function that checks if the number is between 1 and 100 (inclusive). If it is, return "Valid", otherwise return "Invalid".
// let number = prompt("entr a number :")
// function isValid(number){
// if(!isNaN(number) && number!==null){
//         let num = parseInt(number)
//         if(num>0 && num<=100) {
//                   console.log("valid")
//         }
//         else{
//             console.log("invalid ")
//         }
// }
// }
// isValid(number);

// ......................................................
// 5. Write a function that takes a grade (between 0 and 100) and returns the letter grade: "A" for scores between 90 and 100, "B" for scores between 80 and 89, "C" for scores between 70 and 79, and "F" for scores below 70.
// let number = prompt("Enter marks:");

// function grade(number) {
//     if (number !== null && !isNaN(number)) {
//         let num = parseInt(number);

//         if (num >= 0 && num <= 100) {
//             if (num >= 90) {
//                 console.log("Your grade is A");
//             } 
//             else if (num >= 80) {
//                 console.log("Your grade is B");
//             } 
//             else if (num >= 70) {
//                 console.log("Your grade is C");
//             } 
//             else if (num >= 60) {
//                 console.log("Your grade is D");
//             } 
//             else {
//                 console.log("Your grade is F");
//             }
//         } 
//         else {
//             console.log("Invalid marks. Should be between 0 and 100.");
//         }
//     } 
//     else {
//         console.log("Please enter a valid number.");
//     }
// }

// grade(number);

// ......................................................
// 6. Write a function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

// function isEven(num) {
//     if(num%2===0) {
//         return true
//     }
//     else 
//     {
//         return false
//     }
// }

// console.log(isEven(28));

// ......................................................
// 7. Write a
// function that takes a string and checks
// if it contains only numbers.Return "Valid number"
// if the string contains only digits, otherwise
// return "Invalid number".

// function checkNumber(str) {
//     if (!isNaN(str) && str !== "") {
//         return "Valid number";
//     } else {
//         return "Invalid number";
//     }
// }

// console.log(checkNumber("4567"));
// console.log(checkNumber("45a7"));

// ......................................................
// 8. Create a function that takes a string as an argument and returns "Vowel" if the string is a vowel (a, e, i, o, u) and "Not Vowel" if it is not.

// function isVowel(name) {
//     let str = name.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "0" || str[i] === "u") {
//             return "vowel"
//             break;
//         }

//     }
//     return "not vowel"

// }
// console.log(isVowel("cdd"))

// ......................................................
// 9. Create a
// function that takes a string representing a day of the week(e.g., "Monday", "Saturday") and returns "Weekday"
// if it is a weekday(Monday through Friday), and "Weekend"
// if it is a Saturday or Sunday.
// function currentday(day) {
//     if (typeof(day) !== "string") {
//         return "enter a valid string "
//     }
//     day = day.toLowerCase()
//     if (day === "monday" || day === "tuesday" || day == "wednesday" || day === "thursday" || day === "friday") {
//         return "weekday"
//     } else if (day === "saturday" || day === "sunday") {
//         return "weekend"
//     } else {
//         return "enter a valid  day "
//     }
// }
// console.log(currentday("sunday"));
// 
// ......................................................
// 10. Write a
// function that takes a number as an argument and returns "High"
// if the number is greater than 100, "Medium"
// if the number is between 50 and 100, and "Low"
// if it is less than 50.
// function range(num) {
//     if (typeof(num) !== "number") {
//         return "enter in number format"
//     }
//     if (num > 100) {
//         return "high"
//     } else if (num <= 100 && num >= 50) {
//         return "medium"
//     } else {
//         return "low"
//     }
// }
// console.log(range(-10))

// ......................................................
//     // 11. Write a
//     // function that takes a string representing a month(e.g., "January", "August") and returns the season in which the month falls.Assume that "Winter"
//     // is from December to February, "Spring"
//     // is from March to May, "Summer"
//     // is from June to August, and "Fall"
//     // is from September to November.
// function season(month) {
//     if (typeof(month) !== "string")
//         return "enter in valid format"
//     month = month.toLowerCase();
//     if (month === "december" || month === "january" || month === "february") {
//         return "winter"
//     } else if (month === "march" || month === "april" || month === "may") {
//         return "spring"
//     } else if (month === "june" || month === "july" || month === "august") {
//         return "summer"
//     } else if (month === "september" || month === "october" || month === "november") {
//         return "fall"
//     } else {
//         return "enter a valid month name "
//     }
// }
// console.log(season("AuguSt"))
//     //
    // 12. Write a
    // function that takes a year as an argument and returns whether the year is a leap year.A year is a leap year
    // // if it is divisible by 4, but not divisible by 100 unless it is also divisible by 400.
    // function leapYear(year) {
    //     if(typeof(year) !=="number"){
    //         return "enter in correct number format "
    //     }
    //     if((year%4===0 &&  year%100!==0 )||year%400===0 ) {
    //         return "year is leap year"
    //     }
    //     else {
    //         return "year is not leap year"
    //     }
    // }
    // console.log(leapYear(2000))
    
// ......................................................
    // 13. Write a function that takes a number as input and checks if the number is a multiple of 7 or 11. If it is, return "Multiple of 7 or 11", otherwise return "Not a multiple".
// let userInput = prompt("enter a number :")

// function multiple(number) {
//         number = Number(number)
//         if(typeof(number)!=="number"){
//     return "enter in number format"
// }

//         if (number%7=== 0 || number%11===0) {
//             return "multiple of 7 or 11"
//         }
//         else {
//             return "not a multiple "
//         }
// }
// console.log(multiple(userInput));
//
// ......................................................
// 14. Write a function called isDivisibleByBoth that takes a number and checks if it’s divisible by both 3 and 5.
// let userInput = prompt("enter a number :")

// function multipleboth(number) {
//         number = Number(number)
//         if(typeof(number)!=="number"){
//     return "enter in number format"
// }

//         if (number%3=== 0 && number%5===0) {
//             return "multiple of 3 and 5"
//         }
//         else {
//             return "not a multiple "
//         }
// }
// console.log(multiple(userInput));
//  15.Create a function called timeToSeconds that takes two parameters, hours and minutes, and returns the total time in seconds.
// function timeToSec (hours,minutes) {
//  if(typeof(hours)!=="number" && typeof(minutes)!== "number") {
//     return"enter in valid format"
//  }
//  let hourInSec = hours * 3600
//  let minInSec = minutes * 60
//  let totalSec = hourInSec + minInSec
//  return totalSec


// }
// console.log( timeToSec(2,10) + " seconds")


// 16. Create a function called ageInDays that takes a person’s age in years and returns their approximate age in days.
// let userInput = prompt("enter a age in years : ")
//  function ageInDays(years) {
//     years = Number(years)
//     if(typeof(years)!== "number") {
//         return  "enter in correct format"
//     } 
//     if(years>0 && years<=150) {
//                 let ageInDays  = years * 365 
//                 return ageInDays;
//     }
//     else {
//         return "enter a age in correct range"
//     }
 
//  }
//  console.log("at " + userInput +" age in year is equals to" + "age in days "+ ageInDays(userInput))
// 
// 17. Write a function factorial that takes a positive integer n and returns its factorial using a for loop.
// method 1
// let userInput = prompt("enter a number for Factorial:");

// function factorial(num) {
//     num = Number(num);

//     if (isNaN(num) || num < 0) {
//         return "Enter a valid positive number";
//     }

//     if (num === 0 || num === 1) {
//         return 1;
//     }

//     return num * factorial(num - 1);
// }

// console.log(factorial(userInput));
// let userInput = prompt("enter a number for Factorial:");

// function factorial(num) {
//     num = Number(num);

//     if (isNaN(num) || num < 0) {
//         return "Enter a valid positive number";
//     }
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log( "Factorial of  " +userInput+" is "+factorial(userInput))
// 18. Write a function sumOfOddNumbers that takes a number n and returns the sum of all odd numbers from 1 to n.
// let userInput = prompt("enter a  number to calculate sumofoddnumbers");
// userInput  = Number(userInput)
// function sumOfOddNumbers(number) {
//     if(isNaN(number) || number<0) {
//         return " invalid format"
//     }
//      let sum =0;
//     for(let i = 1; i<=number;i=i+2) {
               
//                 sum = sum + i;
//                 // console.log(sum)
                
//     }
//     return  sum;
// }
// console.log("the sum of all odd numbers till "+userInput + " is "+sumOfOddNumbers(userInput))
// 19. Write a function that takes a number and checks if it is a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself). For example, 6 is a perfect number because 1 + 2 + 3 = 6.

// let userInput = prompt("enter a number you want to check for perfect number : ")
// userInput = Number(userInput)
// function perfectNum(num) {
//     if(isNaN(num)|| num<0) {
//         return "enter a valid number"
//     }
//     let sum = 0;
//     for(let i=1;i<num;i++) {
//         if(num%i===0) {
//             sum = sum + i;
//         }

//     }
//     return sum;
// }
// if(perfectNum(userInput)===userInput)  {
//     console.log("your number is  perfect num")
// }
// else{
//     console.log("your number is not perfect")
// }
// // 20. Write a function that takes a 3 digit number and check whether number is Armstrong or not. example: 153 is 3 digit armstrong number

// let userInput = prompt("enter a number you want to check for Armstrong number:");
// userInput = Number(userInput);

// function armstrongNum(number) {

//     if (isNaN(number) || number < 100 || number > 999) {
//         return "enter a valid three digit number";
//     }

//     let sum = 0;
//     let temp = number;

//     while (temp > 0) {
//         let lastDigit = temp % 10;
//         sum = sum + Math.pow(lastDigit, 3);
//         temp = Math.floor(temp / 10);// here in js this gives floating value and in c++ this gives 
//     }

//     return sum;
// }

// if (armstrongNum(userInput) === userInput) {
//     console.log("your given number is armstrong number");
// } else {
//     console.log("your number is not armstrong number");
// }
// // 21. Write a function that take a number and checks if it is a prime number or not. example: 5, 7 is prime numbers


// let userInput = prompt("enter a number you want to check for prime  number:")
// userInput = Number(userInput);
// function isPrime(num) {

//     if(isNaN(num) || num<=1) {
//         return 0;
//     }
    
//     if(num===2) {
//         return 1;
//     }
//     for(let i =2;i<num;i++) {
//             if(num%i === 0) {
//                 return 0;
//             }
//     }
//     return 1;
// } 
// if(isPrime(userInput)) {
//     console.log("given  number is prime ")
// }
// else {
//     console.log("given number is not prime number")
// }
// 22. Write a function that take a number and checks if it is a pallindrom number or not. example: 35253, 5151515 is pallindrom number
// let userInput = prompt("Enter a number to check palindrome:");
// userInput = Number(userInput);

// function isPalindrome(num) {

//     if (isNaN(num) || num < 0) {
//         return "Please enter a valid positive number";
//     }

//     let reverse = 0;
//     let temp = num;

//     while (temp > 0) {
//         let lastDigit = temp % 10;
//         reverse = reverse * 10 + lastDigit;
//         temp = Math.floor(temp / 10); 
//     }

//     return reverse === num;
// }

// let result = isPalindrome(userInput);

// if (typeof result === "string") {
//     console.log(result);
// }
// else if (result) {
//     console.log(userInput + " is a palindrome number");
// }
// else {
//     console.log(userInput + " is not a palindrome number");
// }
// 23. Write a JavaScript loop to calculate the digital root of a number without using arrays, objects, or strings. The digital root of a number is the single-digit value obtained by an iterative process of summing its digits until a single digit is reached.
// let userInput = prompt("Enter a number for digital root:");
// userInput = Number(userInput);

// function digitalroot(num) {

//     if (isNaN(num) || num < 0) {
//         return "Please enter a valid positive number";
//     }

//     let sum = 0;
//     let temp = num;

//     while (temp > 0) {
//         let lastDigit = temp % 10;
//         sum = sum + lastDigit;
//         temp = Math.floor(temp / 10);
//     }

//     let digroot = sum;

//     while (digroot >= 10) {
//         let digsum = 0;

//         while (digroot > 0) {
//             let lastdigroot = digroot % 10;
//             digsum = digsum + lastdigroot;
//             digroot = Math.floor(digroot / 10);
//         }

//         digroot = digsum; 
//     }

//     return digroot;
// }

// let result = digitalroot(userInput);

// if (typeof result === "string") {
//     console.log(result);
// } else {
//     console.log(result + " is the digital root of " + userInput);
// }
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
let userInput = prompt("Enter a number to check perfect number:");
userInput = Number(userInput);

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

let val = isPerfNum(userInput);

if (typeof val === "string") {
    console.log(val);
} 
else if (val) {
    console.log(`The given number ${userInput} is a perfect number`);
} 
else {
    console.log(`The given number ${userInput} is not a perfect number`);
}
