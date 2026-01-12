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