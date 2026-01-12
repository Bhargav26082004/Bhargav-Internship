// 1. Write a function called greet that takes a name as a parameter and logs a greeting message.
let userInput =prompt("enter your name ")
function greeting(name) 
{
    console.log("good morning "+name)
}
greeting(userInput);

// 2. Write a function that takes a string representing a number (e.g., "42") and converts it to an actual number. Then, check if the number is greater than 50 and return a corresponding message.
let number = prompt("enter a number ")
function strTONum(number){



    if(!isNaN(number) && number!==null){
        let num = Number(number)
        console.log("your number is "+ num)
        if(num>50)
        {
            console.log("your number is greater than 50")
        }
        else{
            console.log("your number is less than or equal to 50")
        }
    }
}
strTONum(number);


// 3. Write a function that accepts a string with a number and converts it to a floating-point number. Return the result of multiplying the number by 2.
let num = prompt("entr a number :")
function floatmul(number){
if(!isNaN(number) && number!==null){
        let num = parseFloat(number)
        let newVal = num * 2;
        console.log("multiplication of given number " + num + " is "+newVal);

}
}
floatmul(num);


// 4. Create a function that checks if the number is between 1 and 100 (inclusive). If it is, return "Valid", otherwise return "Invalid".
let val = prompt("entr a number :")
function isValid(number){
if(!isNaN(number) && number!==null){
        let num = parseInt(number)
        if(num>0 && num<=100) {
                  console.log("valid")
        }
        else{
            console.log("invalid ")
        }
}
}
isValid(val);

// 5. Write a function that takes a grade (between 0 and 100) and returns the letter grade: "A" for scores between 90 and 100, "B" for scores between 80 and 89, "C" for scores between 70 and 79, and "F" for scores below 70.
let marks = prompt("Enter marks:");

function grade(number) {
    if (number !== null && !isNaN(number)) {
        let num = parseInt(number);

        if (num >= 0 && num <= 100) {
            if (num >= 90) {
                console.log("Your grade is A");
            } 
            else if (num >= 80) {
                console.log("Your grade is B");
            } 
            else if (num >= 70) {
                console.log("Your grade is C");
            } 
            else if (num >= 60) {
                console.log("Your grade is D");
            } 
            else {
                console.log("Your grade is F");
            }
        } 
        else {
            console.log("Invalid marks. Should be between 0 and 100.");
        }
    } 
    else {
        console.log("Please enter a valid number.");
    }
}

grade(marks);
