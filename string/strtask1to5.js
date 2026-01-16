// 1. Write a function that takes a string as input and returns the string reversed.
// console.log(reverseString("hello")); // Output: "olleh"
function revStr(str) {
    let arr = str.split("");   
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr.join(""); 
}

console.log(revStr("hello")); 

// method 2
function revStr(str) {
    return str.split("").reverse().join("");
}
// 2. Create a function that counts the number of vowels in a string.
// console.log(countVowels("hello world")); // Output: 3

function countVowels(str) {
    let count = 0;
    str = str.toLowerCase()
    for(let i = 0;i<str.length;i++) {
        if (str[i] === 'a' ||str[i] === 'e'||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u') {
             count ++;
        }
    }
   return count;
}

console.log(countVowels("hello world"));
// 3. Write a function that takes a sentence and returns the sentence with each word capitalized.
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
function capitalizeWords(str) {
    let arr = str.split(" ");
    // for(let i = 0 ;i<arr.length;i++) {
    //    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    // }
   str =  arr.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    
    return str
 }
 console.log(capitalizeWords("hello world from javascript"));
 
// 4. Create a function that checks if a given string is a palindrome (reads the same forward and backward, ignoring spaces and case).
// console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
 function isPalindrome(str) {
    str = str.toLowerCase().split(" ").join("");

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome("A man a plan a canal Panama")); 

// 5. Write a function that returns the longest word in a sentence.
// console.log(findLongestWord("I am learning JavaScript string methods")); // Output: "JavaScript"
function findLongestWord(str) {
    str  =str.toLowerCase().split(" ");
    
    let  val = ''
     
     let count = 0;
 for(let i=0;i<str.length;i++) {
     
     

        if(str[i].length > count) {
            count = str[i].length
            val = str[i]
        }
        
    
    }
    return val;

}
console.log(findLongestWord("I am learning JavaScript string methods"));

