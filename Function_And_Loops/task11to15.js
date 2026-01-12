    // 11. Write a
    // function that takes a string representing a month(e.g., "January", "August") and returns the season in which the month falls.Assume that "Winter"
    // is from December to February, "Spring"
    // is from March to May, "Summer"
    // is from June to August, and "Fall"
    // is from September to November.
function season(month) {
    if (typeof(month) !== "string")
        return "enter in valid format"
    month = month.toLowerCase();
    if (month === "december" || month === "january" || month === "february") {
        return "winter"
    } else if (month === "march" || month === "april" || month === "may") {
        return "spring"
    } else if (month === "june" || month === "july" || month === "august") {
        return "summer"
    } else if (month === "september" || month === "october" || month === "november") {
        return "fall"
    } else {
        return "enter a valid month name "
    }
}
console.log(season("AuguSt"))
    //
    // 12. Write a
    // function that takes a year as an argument and returns whether the year is a leap year.A year is a leap year
    // if it is divisible by 4, but not divisible by 100 unless it is also divisible by 400.
    function leapYear(year) {
        if(typeof(year) !=="number"){
            return "enter in correct number format "
        }
        if((year%4===0 &&  year%100!==0 )||year%400===0 ) {
            return "year is leap year"
        }
        else {
            return "year is not leap year"
        }
    }
    console.log(leapYear(2000))
    // 13. Write a function that takes a number as input and checks if the number is a multiple of 7 or 11. If it is, return "Multiple of 7 or 11", otherwise return "Not a multiple".
let userInput = prompt("enter a number :")

function multiple(number) {
        number = Number(number)
        if(typeof(number)!=="number"){
    return "enter in number format"
}

        if (number%7=== 0 || number%11===0) {
            return "multiple of 7 or 11"
        }
        else {
            return "not a multiple "
        }
}
console.log(multiple(userInput));


// 14. Write a function called isDivisibleByBoth that takes a number and checks if it’s divisible by both 3 and 5.
let userVal = prompt("enter a number :")

function multipleboth(number) {
        number = Number(number)
        if(typeof(number)!=="number"){
    return "enter in number format"
}

        if (number%3=== 0 && number%5===0) {
            return "multiple of 3 and 5"
        }
        else {
            return "not a multiple "
        }
}
console.log(multiple(userVal));
//  15.Create a function called timeToSeconds that takes two parameters, hours and minutes, and returns the total time in seconds.
function timeToSec (hours,minutes) {
 if(typeof(hours)!=="number" && typeof(minutes)!== "number") {
    return"enter in valid format"
 }
 let hourInSec = hours * 3600
 let minInSec = minutes * 60
 let totalSec = hourInSec + minInSec
 return totalSec


}
console.log( timeToSec(2,10) + " seconds")
