// 6.Create a const array and try adding new items to it.
const fruits = ["apple","banana","strawberry"]
fruits.push("mango")
console.log(fruits)

// 7. Try reassigning variables declared with let and const.

// Using let
let count = 10;
console.log("Initial count:", count);

count = 20; 
console.log("After reassignment:", count);

// Using const
const pi = 3.14;
console.log("Initial pi:", pi);

// pi = 22/7(error)


//8. Declare variables of each type: string, number, boolean, object, array, null, undefined. Use typeof to log each type.
let Name ="bhargav"
console.log( "type of string :" +typeof(Name))
let Age =21
console.log("\ntype of number : " +typeof(Age))
let isReading = true
console.log(" \ntype of boolean : " + typeof(isReading))
let student = {
    name :"yash",
    grade : "A",
    blood  : "0+"

}
console.log(" \ntype of object : " + typeof(student))
let marks = [80,75,90]
console.log(" \ntype of array : "  + typeof(marks))
let value = null
console.log(" \ntype of null : "+ typeof(value))
let val =undefined
console.log(" \ntype of val : ", + typeof(val)) 

// 9. Create an object to represent a book: title, author, year, and a boolean for if it’s read. Log the object.
let book = {
    title : "Game Of Thrones",
    author : "RR Martin",
    year :2000,
    isRead : true,
}
console.log("printing object \n book : ",book)

// 10. Make an array that includes a number, string, boolean, object, and another array. Log each item.

const mixedArray = [
  25,                     
  "Hello JavaScript",    
   true,                  
  { name: "Bhargav", age: 21 }, 
  [1, 2, 3, 4]            
];

// printing 
console.log( "printing mix array value for index "+0 + " is :"+mixedArray[0]); 
console.log( "printing mix array value for index "+1 + " is :"+mixedArray[1]); 
console.log( "printing mix array value for index "+2+ " is :"+mixedArray[2]); 
console.log( "printing mix array value for index "+3+ " is :"+mixedArray[3]); 
console.log( "printing mix array value for index "+4+ " is :"+mixedArray[4]); 
// ...........................