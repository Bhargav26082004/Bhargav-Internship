// 6. Get a nested value from an object like obj.user.name.first.
let obj2 = {
  user: {
    name: {
      first: "Bhargav",
      middle: "Dineshbhai",
      last: "Modi",
    },
    id: "bhargav2608",
  },
  admin: {
    email: "admin@1234.com",
    password: "1234ABC",
  },
};
console.log(obj2.user.name.first);

// 7. Change a nested value inside an object.
obj2.user.name.middle = "dineshchandra"
obj2["user"] ["name"] ["first"]  = "BHARGAV"
console.log(obj2)

// 8. Find the length of an array that’s inside an object like obj.friends.
function lengthArrInObj() {
    let bhargav  = {
    fullname: "Bhargav Dineshchandra modi ",
    favcricketers: ["virat","rohit","abd"]
}
for(let key in bhargav) {
    if(Array.isArray (bhargav[key])) {
            console.log("at key " + key  + "length of the array is " + bhargav[key].length);
    }
}

}
console.log(lengthArrInObj())

// 9. Add a value to an array that’s inside an object
function changeValArrInObj() {

    let bhargav  = {
            fullname: "Bhargav Dineshchandra modi ",
            favcricketers: ["virat","rohit","abd"]
        }
        console.log(bhargav);
        for(let key in bhargav) {
            if(Array.isArray (bhargav[key])) {
                if(key === "favcricketers") {
                    bhargav[key].push("klrahul")
            }
        }
    }
    return bhargav
}

console.log(changeValArrInObj())
    // 10. Rename some keys in an object using a mapping.
function renameKeys() 
{
    let bhargav = {
  fullname: "Bhargav Modi",
  age: 22,
  role: "Intern"
};
let newval = {
    fullname  : "name",
    role : "position"
}

let newobj = Object.fromEntries(
  Object.entries(bhargav).map(([key, value]) => {
   return  [newval[key] || key, value] // entries is 2d array with if new key is exist or old key if it is not exist 
  })
);
 return newobj
}
console.log(renameKeys());
// 11. Turn "a=1,b=2" into an object like { a: "1", b: "2" }.
// own technique 
// 

function strToObj1() {

    let object = {}
    
    let str = "a=1,b=2"
    let arr = str.split(",")
    for(let i = 0; i < arr.length; i++) {
        let key = arr[i].slice(0,1)
        let val = arr[i].slice(2)
        
        object[key] = val
    }
    
     return object
}
console.log(strToObj1());
//  two split method 

function strToObj2() {

    let str = "a=1,b=2"
    let arr = str.split(",")
    
    let obj = Object.fromEntries(
        arr.map(item => item.split("="))
    );
     return obj
}
console.log(strToObj2());


// 12. Flatten one level of a nested object (e.g. { a: { b: 1 } } → { 'a.b': 1 })
let flatobj = {
    a : {
        b:1
    },
    c:3
}
function nestedobj(flatobj) {
    
    let res=  {} 
    for(let key in flatobj) {
        if(typeof flatobj[key] === "object" && flatobj[key] !== null) {
            for(let innerkey in flatobj[key]) {
                res[`${key}.${innerkey}`] = flatobj[key] [innerkey]
            }
        }
        else {
            res[key ] = flatobj[key]
        }
    }
    return res
}
console.log(nestedobj(flatobj))