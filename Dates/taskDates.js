// 1. Create a JavaScript program that displays:
//    Today’s full date and time using toString()
//    Just the date using toDateString()
//    Just the time using toTimeString()
function date() {

    let val = new Date();
    console.log(val);
    console.log(val.toString ());
    console.log(val.toDateString());
    let time = val.toTimeString().split(" ")[0]
    console.log(time);
}
let ans1 = date();
// 2 input 2025-06-12T10.30.25
//   output 12 june, 2025 10.30 AM
 function strToTime() {

     let str = "2025-06-12T10.30.25";
     
     
     str = str.replace("T", " ").replaceAll(".", ":");
     
let dateObj = new Date(str);

let day = dateObj.getDate();
let year = dateObj.getFullYear();

let monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
let month = monthNames[dateObj.getMonth()];

let hours = dateObj.getHours();
let minutes = dateObj.getMinutes()
;

let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 

let output = `${day} ${month}, ${year} ${hours}.${minutes} ${ampm}`;

console.log(output);
}
let ans2 = strToTime();

// 3 input 2025-06-12T10.30.25
//   output 12 june, 2025 4.00 PM
function utcToIst (){
    let str = "2025-06-12T10.30.25";

// make it ISO compatible
str = str.replace("T", " ").replaceAll(".", ":");

let dateObj = new Date(str);

dateObj.setHours(dateObj.getHours() + 5);
dateObj.setMinutes(dateObj.getMinutes() + 30);

let day = dateObj.getDate();
let year = dateObj.getFullYear();

let months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
let month = months[dateObj.getMonth()];

let hours = dateObj.getHours();
let minutes = dateObj.getMinutes().toString().padStart(2, "0");

let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;

let output = `${day} ${month}, ${year} ${hours}.${minutes} ${ampm}`;
console.log(output);
}
 let ans3 = utcToIst();
// 4 input Today: 12 June 2025
//   output 1 : 7 days from now: 19 June 2025

//   output 2 : 30 days ago: 13 May 2025

function questionfour() {
    let str = "12 June 2025";

let val = str.split(" ");
let date = Number(val[0]);
let year = Number(val[2]);

let monthname = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

let month = monthname.findIndex(m => m === val[1]); 
function sevenDaysAfter(year,month,date) {

    let dateObj = new Date(year, month, date);
    dateObj.setDate(dateObj.getDate() + 7); 
    let newDate = dateObj.getDate();
    let newMonth = monthname[dateObj.getMonth()];
let newYear = dateObj.getFullYear();
return `7 days from now: ${newDate} ${newMonth} ${newYear}`;

}
let ans = sevenDaysAfter(year,month,date)
console.log(ans);

function thirtydayago (year,month,date) {
    let dateObject = new Date (year,month,date);

dateObject.setDate(dateObject.getDate() -30); 
let  newDate =  dateObject.getDate();
let newMonth = monthname[dateObject.getMonth()];
let newyear = dateObject.getFullYear();
return `30 days ago : ${newDate} ${newMonth} ${newyear}`;

}
let res = thirtydayago(year,month,date)
console.log(res);
}
let ans4 =questionfour();
// 5 Convert UTC Time to IST and AUS
//   input = "2025-06-12T10:30:25Z"; 
//   output 1 : "12 June, 2025, 4:00 PM" (IST)
//   output 2 : "12 June, 2025, 8:00 PM" (AUS)

function questionFivepart1() {
    let str = "2025-06-12T10:30:25Z";

    let dateObj = new Date(str); // keep UTC

    let year = dateObj.getUTCFullYear();
    let date = dateObj.getUTCDate();
    let monthnum = dateObj.getUTCMonth();
    let hour = dateObj.getUTCHours();
    let min = dateObj.getUTCMinutes();

    let monthname = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    function utcToIst(year, month, date, hour, min) {
        let newObj = new Date(year, month, date, hour, min);

        newObj.setHours(newObj.getHours() + 5);
        newObj.setMinutes(newObj.getMinutes() + 30);

        let newYear = newObj.getFullYear();
        let newMonth = monthname[newObj.getMonth()];
        let newDate = newObj.getDate();

        let newHour = newObj.getHours();
        let newMinutes = newObj.getMinutes().toString().padStart(2, "0");

        let ampm = newHour >= 12 ? "PM" : "AM";
        newHour = newHour % 12 ;

        return `${newDate} ${newMonth}, ${newYear} ${newHour}.${newMinutes} ${ampm}`;
    }

    return utcToIst(year, monthnum, date, hour, min);
}

let ans5 = questionFivepart1();
console.log(ans5);


function questionfivepart2() {
     let str = "2025-06-12T10:30:25Z";

    let dateObj = new Date(str); // keep UTC

    let year = dateObj.getUTCFullYear();
    let date = dateObj.getUTCDate();
    let monthnum = dateObj.getUTCMonth();
    let hour = dateObj.getUTCHours();
    let min = dateObj.getUTCMinutes();

    let monthname = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    function utcToaus(year, month, date, hour, min) {
        let newObj = new Date(year, month, date, hour, min);

        newObj.setHours(newObj.getHours() + 9);
        newObj.setMinutes(newObj.getMinutes() + 30);

        let newYear = newObj.getFullYear();
        let newMonth = monthname[newObj.getMonth()];
        let newDate = newObj.getDate();

        let newHour = newObj.getHours();
        let newMinutes = newObj.getMinutes().toString().padStart(2, "0");

        let ampm = newHour >= 12 ? "PM" : "AM";
        newHour = newHour % 12 ;

        return `${newDate} ${newMonth}, ${newYear} ${newHour}.${newMinutes} ${ampm}`;
    }

    return utcToaus(year, monthnum, date, hour, min);

}
let ans52 = questionfivepart2()
console.log(ans52);