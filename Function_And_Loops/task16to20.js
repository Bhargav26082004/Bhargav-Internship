
// 16. Create a function called ageInDays that takes a person’s age in years and returns their approximate age in days.
let userInput = prompt("enter a age in years : ")
 function ageInDays(years) {
    years = Number(years)
    if(typeof(years)!== "number") {
        return  "enter in correct format"
    } 
    if(years>0 && years<=150) {
                let ageInDays  = years * 365 
                return ageInDays;
    }
    else {
        return "enter a age in correct range"
    }
 
 }
 console.log("at " + userInput +" age in year is equals to" + "age in days "+ ageInDays(userInput))

// 17. Write a function factorial that takes a positive integer n and returns its factorial using a for loop.

//   method 1
let val = prompt("enter a number for Factorial:");

function factorial(num) {
    num = Number(num);

    if (isNaN(num) || num < 0) {
        return "Enter a valid positive number";
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log( "Factorial of  " +userInput+" is "+factorial(val))
// method 2
// let factVal = prompt("enter a number for Factorial:");

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

// console.log(factorial(factVal));
// 18. Write a function sumOfOddNumbers that takes a number n and returns the sum of all odd numbers from 1 to n.
let input = prompt("enter a  number to calculate sumofoddnumbers");
userInput  = Number(userInput)
function sumOfOddNumbers(number) {
    if(isNaN(number) || number<0) {
        return " invalid format"
    }
     let sum =0;
    for(let i = 1; i<=number;i=i+2) {
               
                sum = sum + i;
                // console.log(sum)
                
    }
    return  sum;
}
console.log("the sum of all odd numbers till "+userInput + " is "+sumOfOddNumbers(input))
// 19. Write a function that takes a number and checks if it is a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself). For example, 6 is a perfect number because 1 + 2 + 3 = 6.

let perfectNum= prompt("enter a number you want to check for perfect number : ")
userInput = Number(userInput)
function perfectNum(num) {
    if(isNaN(num)|| num<0) {
        return "enter a valid number"
    }
    let sum = 0;
    for(let i=1;i<num;i++) {
        if(num%i===0) {
            sum = sum + i;
        }

    }
    return sum;
}
if(perfectNum(perfectNum)===userInput)  {
    console.log("your number is  perfect num")
}
else{
    console.log("your number is not perfect")
}
// 20. Write a function that takes a 3 digit number and check whether number is Armstrong or not. example: 153 is 3 digit armstrong number

let armstrongNum = prompt("enter a number you want to check for Armstrong number:");
userInput = Number(userInput);

function armstrongNum(number) {

    if (isNaN(number) || number < 100 || number > 999) {
        return "enter a valid three digit number";
    }

    let sum = 0;
    let temp = number;

    while (temp > 0) {
        let lastDigit = temp % 10;
        sum = sum + Math.pow(lastDigit, 3);
        temp = Math.floor(temp / 10);// here in js this gives floating value and in c++ this gives 
    }

    return sum;
}

if (armstrongNum(armstrongNum) === userInput) {
    console.log("your given number is armstrong number");
} else {
    console.log("your number is not armstrong number");
}