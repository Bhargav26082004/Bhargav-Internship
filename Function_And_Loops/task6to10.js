// 6. Write a function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

function isEven(num) {
    if(num%2===0) {
        return true
    }
    else 
    {
        return false
    }
}

console.log(isEven(28));


// 7. Write a
// function that takes a string and checks
// if it contains only numbers.Return "Valid number"
// if the string contains only digits, otherwise
// return "Invalid number".

function checkNumber(str) {
    if (!isNaN(str) && str !== "") {
        return "Valid number";
    } else {
        return "Invalid number";
    }
}

console.log(checkNumber("4567"));
console.log(checkNumber("45a7"));


// 8. Create a function that takes a string as an argument and returns "Vowel" if the string is a vowel (a, e, i, o, u) and "Not Vowel" if it is not.

function isVowel(name) {
    let str = name.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "0" || str[i] === "u") {
            return "vowel"
            break;
        }

    }
    return "not vowel"

}
console.log(isVowel("cdd"))


// 9. Create a
// function that takes a string representing a day of the week(e.g., "Monday", "Saturday") and returns "Weekday"
// if it is a weekday(Monday through Friday), and "Weekend"
// if it is a Saturday or Sunday.
function currentday(day) {
    if (typeof(day) !== "string") {
        return "enter a valid string "
    }
    day = day.toLowerCase()
    if (day === "monday" || day === "tuesday" || day == "wednesday" || day === "thursday" || day === "friday") {
        return "weekday"
    } else if (day === "saturday" || day === "sunday") {
        return "weekend"
    } else {
        return "enter a valid  day "
    }
}
console.log(currentday("sunday"));


// 10. Write a
 // function that takes a number as an argument and returns "High"
// if the number is greater than 100, "Medium"
// if the number is between 50 and 100, and "Low"
// if it is less than 50.
function range(num) {
    if (typeof(num) !== "number") {
        return "enter in number format"
    }
    if (num > 100) {
        return "high"
    } else if (num <= 100 && num >= 50) {
        return "medium"
    } else {
        return "low"
    }
}
console.log(range(-10))
