// 6. Get a nested value from an object like obj.user.name.first.
let obj2 =   {
    user : {
        name : {
            first :"Bhargav",
            middle : "Dineshbhai",
            last : "Modi",

        },
        id : "bhargav2608"
    },
    admin :  {
        email :  "admin@1234.com",
        password : "1234ABC"
    }
}
console.log(obj2.user.name.first);