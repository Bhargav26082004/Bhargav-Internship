// // 1. Write a function that takes an array of numbers and returns the maximum number in the array.
// //  let arr = [10,20,40,50]
// // function Maxele(arr) {
// //     let maxVal =0;
// //     for(let i =0;i <arr.length;i++) {
// //           if(arr[i]>maxVal) {
// //             maxVal = arr[i]
// //           }
// //     }
// //     return maxVal
// // // }
// // console.log("Max element is : ",Maxele(arr));
// // 2. Write a function that takes an array of numbers and returns the minimum number in the array.

// //  let arr = [10,20,40,50]
// // function minEle(arr) {
// //     let minVal =Infinity;
// //     for(let i =0;i <arr.length;i++) {
// //           if(arr[i] < minVal) {
// //             minVal = arr[i]
// //           }
// //     }
// //     return minVal
// // }
// // console.log("Minimum element is : ",minEle(arr));
// // 3. Write a function that takes an array of numbers and returns the sum of all element
// // let arr = [10,20,30,40,50,60]
// // function sumEle(arr) {
// //     let sum =0;
// //     for(let i = 0 ;i<arr.length;i++) {
// //               sum = sum + arr[i]
// //     }
// //  return sum;
// // }
// // console.log(`sum of the all element of array is ${sumEle(arr)}`)

// // 4. Write a function that takes an array and returns a new array with elements in reverse order.
// // let arr = [10,20,30,40,50,60]
// // function revArr(arr) {
// // let newArr = [];
// // for(let i = arr.length-1;i>0;i--) {
// //     newArr.push(arr[i])
// // }
// // //  let newArr =arr.toReversed();
// //  for(let i = 0;i<newArr.length;i++) {
// //     console.log("at idx"+ i + "value of new array is :" +newArr[i] );
// //  }
// // }
// // revArr(arr)
// // 5. Write a function that checks if a given value exists in an array.
// // let arr = [10,20,30,40,50]
// // let  num = prompt("enter a number you want to check")
// //  num = Number(num);
// // function isExist(arr,num) {

// //  for(let i = 0;i<arr.length;i++) {
// //     if (num === arr[i]) {
// //         return true;

// //     }
// //  }
// //  return false;
// // }
// // let ans = isExist(arr,num);
// // if(ans ) {
// //     console.log(`  ${num}  is exist in array` )

// // }
// // else {
// //     console.log( `  ${num} is not  exist in array`)
// // }
// // // 6. Write a function that counts how many times a specific element appears in an array.
// // let arr = [10,20,30,20,30,10,20,40,50]
// // let  num = prompt("enter a number you want to check")
// //  num = Number(num);
// //  function countAppear(arr,num)  {
// // if(isNaN(num) || num<0) {
// //     return "enter a positive number "
// // }
// // let count = 0;
// // for(let i = 0;i<arr.length;i++) {
// //     if(arr[i] === num) {
// //         count++;
// //     }
// // }
// // return count
// // }
// // let ans =countAppear(arr,num)
 
// //  if( ans === "string") {
// //                 console.log(ans)
// //  }
// //  console.log(  num + " number appears " +ans + " times in this array ")
// //  7. Write a function that removes duplicate elements from an array and returns a new array.
// // let arr = [10, 20, 30, 40, 20, 30, 50];
// //   using two loops 
// // function removesDup(arr) {
// //     let newArr = [];

// //     for (let i = 0; i < arr.length; i++) {
// //         let isDuplicate = false;

// //         for (let j = 0; j < newArr.length; j++) {
// //             if (arr[i] === newArr[j]) {
// //                 isDuplicate = true;
// //                 console.log("This number is duplicate:", arr[i]);
// //                 break;
// //             }
// //         }

// //         if (!isDuplicate) {
// //             newArr.push(arr[i]); 
// //         }
// //     }

// //     return newArr;
// // }

// // let ans = removesDup(arr);
// // console.log("The new array without duplicate numbers is:", ans);
// //  using include method 
// // let arr = [10,20,30,40,20,30,50];

// // function removesDup(arr) {
// //     let newArr = [];

// //     for (let i = 0; i < arr.length; i++) {
// //         if (!newArr.includes(arr[i])) {
// //             newArr.push(arr[i]);
// //         } else {
// //             console.log("This number is duplicate:", arr[i]);
// //         }
// //     }

// //     return newArr;
// // }

// // let ans = removesDup(arr);
// // console.log("The new array without duplicate numbers is:", ans);

// // 8. Write a function that returns the second largest number in an array.
// // let arr = [1,2,5,6,9] ;
// // let newArr = arr.sort((a,b) => b -a);
// // console.log( "second largest element is : ",newArr[1])
// // function secondLargest(arr) {
// //     let largest = 0;
// // //     let secondLargest = 0;

// // //     for (let i = 0; i < arr.length; i++) {
// // //         if (arr[i] > largest) {
// // //             secondLargest = largest;
// // //             largest = arr[i];
// // //         } else if (arr[i] > secondLargest && arr[i] !== largest) {
// // //             secondLargest = arr[i];
// // //         }
// // //     }

// // //     return secondLargest;
// // // }

// // // let arr = [1, 2, 5, 6, 9];
// // // console.log("Second largest number is:", secondLargest(arr));


// // // 9. Write a function that merges two sorted arrays into a single sorted array.
// // // let arr = [2,1,4,3,7];
// // // let brr  = [9,8,12,10];
// // // function concatArr(arr, brr) {
// // //     let newArr = arr.sort((a, b) => a - b);
// // //     let newBrr = brr.sort((a, b) => a - b);
// // //     return newArr.concat(newBrr).sort((a, b) => a - b);
// // // }

// // // console.log(concatArr(arr, brr));
// // // function mergeSortedArrays(arr, brr) {
// // //     let i = 0, j = 0;
// // //     let result = [];

// // //     while (i < arr.length && j < brr.length) {
// // //         if (arr[i] < brr[j]) {
// // //             result.push(arr[i]);
// // //             i++;
// // //         } else {
// // //             result.push(brr[j]);
// // //             j++;
// // //         }
// // //     }

// // //     while (i < arr.length) {
// // //         result.push(arr[i]);
// // //         i++;
// // //     }

// // //     while (j < brr.length) {
// // //         result.push(brr[j]);
// // //         j++;
// // //     }

// // //     return result;
// // // }

// // // let arr = [1,2,3,4,7];
// // // let brr = [8,9,10,12];

// // // console.log(mergeSortedArrays(arr, brr));


// // // 10. Write a function that rotates an array to the right by k positions.
// // function rotateRight(arr, k) {
// //     let n = arr.length;
// //     let result = []; 

// //     k = k % n;

// //     for (let i = 0; i < n; i++) {
// //         let newIndex = (i + k) % n;
// //         result[newIndex] = arr[i];
// //     }

// //     return result;
// // }

// // console.log(rotateRight([10,20,30,40,50], 2));


// // 11. Given an array containing n distinct numbers taken from 0 to n, find the missing number

// // let arr = [0,1,2,3,4,5,7];
// // function  findMissing (arr) {
// //     if (arr[0] !== 0) {
// //         return 0;
// //     }
// //  for(let i = 1;i<arr.length;i++) {
// //     if(i !== arr[i]) {
// //              return i;    
              
// //     }
// //  }

// // }
// //  using xor if it is not sorted 
// // let ans = findMissing(arr) ;
// // console.log("missing element in array is :",ans)
// // function findMissing(arr) {
// //     let n = arr.length;
// //     let xor = 0;

// //     for (let i = 0; i <= n; i++) {
// //         xor ^= i;
// //     }

// //     for (let i = 0; i < arr.length; i++) {
// //         xor ^= arr[i];
// //     }

// //     return xor;
// // }

// // console.log(findMissing([0,1,2,3,4,5,7]));
// // 12. Write a function that takes an array and a target sum and returns all pairs of numbers that add up to the target.
// // let arr = [10,20,30,40,50] 
// // let target = 60
// // function targetSum(arr,target) {
// //  for(let i=0;i<arr.length;i++){
// //     for (let j= i+1; j<arr.length;j++) {
// //         if(arr[i] + arr[j] === target){
// //             console.log(`\n[ ${arr[i]}, ${arr[j]}] is pair for ${target}`)
// //         }
// //     }
// //  }
// // }
// // targetSum(arr,target)
// // 13. Given two arrays, return a new array containing elements that appear in both arrays (without duplicates).

// // let arr = [1,3,5,6,5,8];
// // let brr = [1,4,5,6,7,5,8];
// // function intersectVal(arr,brr) {
// //     let newarr = arr.sort((a,b) => a-b)
// //      let newbrr = brr.sort((a,b) => a-b)
// //      let newArray = []
// //      let i =0 ;
// //      let j = 0;
// //      while(i<arr.length && j<brr.length) {
// //         if(newarr[i] == newbrr[j] && !(newArray.includes(newarr[i]))) {
// //             newArray.push(newarr[i])
// //             i++;
// //             j++;
// //         }
// //         else if( arr[i]> brr[j]) {
// //             j++;
// //         }
// //         else if (arr[i] < brr[j]) {
// //             i++;
// //         }
// //         else {
// //             i++;
// //             j++;
// //         }
// //      }
// //      return newArray;

// // }
// // let ans = intersectVal(arr,brr);
// // console.log(ans);
// // function intersectVal(arr, brr) {
// //     let result = [];

// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = 0; j < brr.length; j++) {
// //             if (arr[i] === brr[j] && !result.includes(arr[i])) {
// //                 result.push(arr[i]);
// //             }
// //         }
// //     }

// //     return result;
// // }

// // console.log(intersectVal(arr,brr));

// // 14. Given an array of integers, find the first element that appears only once.
// // function findUnique(arr) {
// // let n = arr.length;
// // let ans = 0;
// // for(let i = 0;i<n; i++) {
// //  ans = ans ^ arr[i];
// // }
// // return ans;

// // }
// // let arr =  [1,3,3,1,2];
// // let ans = findUnique(arr);
// // console.log(`unique element in this duplicate array is : `,ans);
// // 15. Implement a function to sort an array without using JavaScript’s built-in sort()
// // let arr = [7,8,1,2,5,9];
// // let n = arr.length;
// //  selection sort 
// // function sortArr(arr, n) {
// //     for (let i = 0; i < n - 1; i++) {
// //         let mini = i;

// //         for (let j = i + 1; j < n; j++) {
// //             if (arr[mini] > arr[j]) {
// //                 mini = j;
// //             }
// //         }

// //         // swap AFTER inner loop
// //         let temp = arr[i];
// //           arr[i] = arr[mini];
// //         arr[mini] = temp;
// //     }

// //     return arr;
// // }

// // console.log(sortArr(arr, n));
// // //  bubble sort ;
// // // function sortArr(arr, n) {
// // //     for(let i= 0;i<n-1;i++) // no of passes is always less  then 1 entire  size  of array  -1 to avoid out of bound effect because it will compare second last ele 
// // //     {
// // //         for(let j= 0;j<n-i-1;j++) // represents how comparision in this round i-1 represnts how many are sorted from back of array 
        
// // //         {
// // //             if(arr[j] >arr[j+1] ) {
            
// // //                     let temp = arr[j];
// // //           arr[j] = arr[j+1];
// // //         arr[j+1] = temp;
                
// // //             }

            
// // //         } 
// // //     }
// // //     return arr;

// // // }
// // // let ans =sortArr(arr,n);
// // // console.log(ans);

// // // // insertionsort
// // // function insertionSort(arr,n)
// // // {
// // //     for(let i =1;i<n;i++) {
// // //         let key = arr[i];
// // //         let j = i-1;
// // //         while (j>=0 && arr[j] > key) {
// // //             arr[j+1] = arr[j];
// // //             j--;// at j = 0 it goes out of bound but we are not accessing j idx when it is -1
// // //         }
// // //         arr[j+1] =key;
// // //     }
// // // return arr;
// // // }
// // // let ans = insertionSort(arr,n);
// // // console.log(ans);
// // // // 16. Given an unsorted array of integers, find the length of the longest consecutive sequence of numbers.
// // //  let arr = [100, 4, 200, 1, 3, 2]

// // // function longestSubsequent(arr) {
// // //    arr =  arr.sort((a,b) => a-b) 
// // //    let newArr = []
// // //    for(let i =0;i<arr.length;i++)
// // // {
// // //     if(arr[i+1] -arr[i] ===1  ) {
// // //         if( !newArr.includes(arr[i])) {

// // //             newArr.push(arr[i]);
// // //         }
// // //   newArr.push(arr[i+1]);

// // //     }
// // // }
// // // return newArr

// // // }

// // // let ans = longestSubsequent(arr)
// // // console.log(ans);
// // // console.log("the length of the longest consecutive sequence of numbers :", ans.length )

// 17. Given an array of numbers, return an array where each element at index i is the product of all elements except the one at i, without using division.
// let arr = [2,3,4];
//  function  productArr (arr) {
//     let newArr = [] ;
// ;
//     for(let i = 0;i<arr.length;i++){
//         let product = 1;
//         for(let j =0;j<arr.length;j++) {
//             if(i!==j) {
//                 product = product * arr[j];

                
//             }

//         }
//         newArr.push(product);




//     }
//     return newArr;
//  }
//  let ans = productArr(arr);
//  console.log(ans)

// // // 18. Given an array of positive and negative numbers, rearrange it so that numbers alternate in sign while maintaining relative order.
// // let arr = [1, -2, 3, -4, -1, 4];
// // // function rearrange(arr) {
// // //     let n = arr.length;
// // //    let posArr = [];
// // //    let negArr  = [];
// // //    for(let i=0;i<n;i++) {
// // //     if(arr[i] >0) {
// // //         posArr.push(arr[i])

// // //     }
// // //     else {
// // //         negArr.push(arr[i])
// // //     }
// // //    }
// // // for(let i=0;i<n;i++) {
// // //     let j = 0;
// // //     let k = 0;
// // //     while(j<posArr.length && k<negArr.length)
// // //     if(i%2===0) {
// // //         arr.splice(i,1,posArr[j]);
// // //         j++;
// // //     }
// // //     else {
// // //         arr.splice(i,1,negArr[k]);
// // //         k++;
// // //     }
// // // }

// // // }
// // // let ans = rearrange(arr);
// // // console.log(ans);
// // // let arr = [1, -2, 3, -4, -1, 4];

// // function rearrange(arr) {
// //     let posArr = [];
// //     let negArr = [];

// //     // Separate positives and negatives
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > 0) posArr.push(arr[i]);
// //         else negArr.push(arr[i]);
// //     }

// //     let i = 0, j = 0, k = 0;

// //     // Merge alternately
// //     while (j < posArr.length && k < negArr.length) {
// //         if (i % 2 === 0) arr[i++] = posArr[j++];
// //         else arr[i++] = negArr[k++];
// //     }

// //     // Add remaining positives
// //     // possiblity that pos array is bigger than neg 
// //     while (j < posArr.length) arr[i++] = posArr[j++];

// //     // Add remaining negatives
// //     while (k < negArr.length) arr[i++] = negArr[k++];

// //     return arr;
// // }

// // let ans = rearrange(arr);
// // console.log(ans);
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function maxSubarraySum(arr) {
//     let n = arr.length;
//     let maxSum = arr[0]; // start with first element

//     // Loop through each starting index of subarray
//     for (let i = 0; i < n; i++) {
//         let currentSum = 0;

//         // Loop through each ending index of subarray starting from i
//         for (let j = i; j < n; j++) {
//             currentSum += arr[j]; // add elements to current sum
//             if (currentSum > maxSum) {
//                 maxSum = currentSum; // update max if bigger
//             }
//         }
//     }

//     return maxSum;
// }

// console.log(maxSubarraySum(arr)); // Output: 6

// // 20. Given an array, find the element that appears more than n/2 times (where n is the array length). Assume that such an element always exists.
// let arr = [2, 2, 1, 2, 3, 2, 2]
// function majorEle (arr) {
// let n = arr.length;
// arr = arr.sort((a,b) => a-b);
// let count = 1;
// for(let i=1;i<n;i++) {
//     if(arr[i] === arr[i-1] ) {
//         count++;
//     }
//     else{
//         count =1;
//     }
//     if(count > n/2) {
//         return arr[i]
//     }
// }
 
// }
// let ans = majorEle(arr);
// console.log(ans)
// // let arr = [2, 2, 1, 2, 3, 2, 2];
// //   different algo
// // function majorityElement(arr) {
// //     let candidate = null;
// //     let count = 0;

// //     for (let i = 0; i < arr.length; i++) {
// //         if (count === 0) {
// //             candidate = arr[i];
// //             count = 1;
// //         } else if (arr[i] === candidate) {
// //             count++;
// //         } else {
// //             count--;
// //         }
// //     }

// //     return candidate;
// // }

// // console.log(majorityElement(arr));
