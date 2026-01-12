// 1. Write a function that takes an array of numbers and returns the maximum number in the array.
 let arrMax = [10,20,40,50]
function Maxele(arr) {
    let maxVal =0;
    for(let i =0;i <arr.length;i++) {
          if(arr[i]>maxVal) {
            maxVal = arr[i]
          }
    }
    return maxVal
}
console.log("Max element is : ",Maxele(arrMax));
// 2. Write a function that takes an array of numbers and returns the minimum number in the array.

 let arrMin = [10,20,40,50]
function minEle(arr) {
    let minVal =Infinity;
    for(let i =0;i <arr.length;i++) {
          if(arr[i] < minVal) {
            minVal = arr[i]
          }
    }
    return minVal
}
console.log("Minimum element is : ",minEle(arrMin));
// 3. Write a function that takes an array of numbers and returns the sum of all element
let arrSum = [10,20,30,40,50,60]
function sumEle(arr) {
    let sum =0;
    for(let i = 0 ;i<arr.length;i++) {
              sum = sum + arr[i]
    }
 return sum;
}
console.log(`sum of the all element of array is ${sumEle(arrSum)}`)

// 4. Write a function that takes an array and returns a new array with elements in reverse order.
let arr = [10,20,30,40,50,60]
function revArr(arr) {
let newArr = [];
for(let i = arr.length-1;i>0;i--) {
    newArr.push(arr[i])
}
//  let newArr =arr.toReversed();
 for(let i = 0;i<newArr.length;i++) {
    console.log("at idx"+ i + "value of new array is :" +newArr[i] );
 }
}
revArr(arr)