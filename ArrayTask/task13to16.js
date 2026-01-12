
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