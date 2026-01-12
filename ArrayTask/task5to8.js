// 5. Write a function that checks if a given value exists in an array.
let arrExist = [10,20,30,40,50]
let  num = prompt("enter a number you want to check")
 num = Number(num);
function isExist(arr,num) {

 for(let i = 0;i<arr.length;i++) {
    if (num === arr[i]) {
        return true;

    }
 }
 return false;
}
let result = isExist(arr,num);
if(result) {
    console.log(`  ${num}  is exist in array` )

}
else {
    console.log( `  ${num} is not  exist in array`)
}
// 6. Write a function that counts how many times a specific element appears in an array.
let arrCount = [10,20,30,20,30,10,20,40,50]
let  number = prompt("enter a number you want to check")
 number = Number(num);
 function countAppear(arr,num)  {
if(isNaN(num) || num<0) {
    return "enter a positive number "
}
let count = 0;
for(let i = 0;i<arr.length;i++) {
    if(arr[i] === num) {
        count++;
    }
}
return count
}
let ansW =countAppear(arrCount,number)
 
 if( ansW === "string") {
                console.log(ansW)
 }
 console.log(  num + " number appears " +ansW + " times in this array ")
//  7. Write a function that removes duplicate elements from an array and returns a new array.
let arr = [10, 20, 30, 40, 20, 30, 50];
//   using two loops 
function removesDup(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                isDuplicate = true;
                console.log("This number is duplicate:", arr[i]);
                break;
            }
        }

        if (!isDuplicate) {
            newArr.push(arr[i]); 
        }
    }

    return newArr;
}

let ans = removesDup(arr);
console.log("The new array without duplicate numbers is:", ans);
//  using include method 


function removesDup(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        } else {
            console.log("This number is duplicate:", arr[i]);
        }
    }

    return newArr;
}

let answer = removesDup(arr);
console.log("The new array without duplicate numbers is:", answer);

// 8. Write a function that returns the second largest number in an array.
let arrLarge= [1,2,5,6,9] ;
let newArr = arr.sort((a,b) => b -a);
console.log( "second largest element is : ",newArr[1])
function secondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// let arr = [1, 2, 5, 6, 9];
console.log("Second largest number is:", secondLargest(arrLarge));