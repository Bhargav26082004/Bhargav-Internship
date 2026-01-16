// Count how many keys are in an object.
// let student = {
//     name : "Bhargav",
//     age : 21,
//     marks :94,
//     city : "ankleshwar"
// }
let count = 0;
for (const key in student ){
    
    count++;
    
    
}
console.log(count);

// // Change all values in an object to uppercase.
// let student = {
//     name : "Bhargav",
//     age : 21,
//     marks :94,
//     city : "ankleshwar"
// }
for(let key in student) {
    if(typeof student[key] === "string") {
        student[key] = student[key].toUpperCase()
        
    }
    console.log(student[key])
}

// Swap keys and values in an object.
let student = {
    name : "Bhargav",
    age : 21,
    marks :94,
    city : "ankleshwar"
}
for(let key in student ) { 
   
        let temp = key
        key = student[key]
        student[key] = temp
        
    
    console.log("the new key is : ",key);
    console.log("the new value is : ",student[key]);

}
// 1. Merge two objects into one (new object).
// let employee = {
//     name  : "bhargav",
//     domain : "web dev",
//     salary :  2000,
//     city : "surat" ,

// }
let intern  = {
    
    age : 21,
    marks :94,
    hometown : "ankleshwar"
}
let vale =  {...employee,...intern}
console.log(vale);
let staff = Object.assign(employee,intern)
console.log(staff)

// 2. Find the key that has a certain value.
let employee = {
    name  : "bhargav",
    domain : "web dev",
    salary :  2000,
    city : "surat" ,

}
let val = "web dev"
// val = "APP DEV"
function keyval (val) {
for(let key in employee)
{ 
    if(employee[key] === val) {
        return key
    }
    
}
 return "not found"
}
console.log(keyval(val))

// 3. Check if an object has no keys.
let obj = {

}
let isempty =true;

for(let key in obj) {
    isempty = false
    break;
}
if(isempty) {
    console.log("object has no keys")
}
else {
    console.log("object has keys ");
}


// 4. Add all the numbers in an object’s values.
let obj1 = {
    a :10,
    b:20,
    c:30,
}

let sum = Object.values(obj1).reduce((acc,cur) => acc + cur ,0) 
console.log(sum)
//  
// 5. Delete all keys where the value is null or undefined.
let cricket = {
    name : " virat",
    level : "international",
   
    wicket : null,
      currently : undefined,
 centuries : 85,

}

// for(let key in cricket ) {
//     // if (cricket[key] === null || cricket [key] === undefined) {
//     //     delete cricket[key]
//     // }
// }
//  firstly object converts into array  using Object.entries(cricket) 
//  this array look like this [["name ","virat"]] etc..
// on array we apply fiter and paramters are [ ,val] where first is key like name which is ignored and operation is done on value 
// and using object.from entries array is convert back to object 
    cricket = Object.fromEntries(Object.entries(cricket).filter(([,val]) => val != null ))
      
console.log(cricket)

