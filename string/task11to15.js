// 11. Write a function that takes a sentence as input and converts it to camelCase format.
// console.log(toCamelCase("hello world from JavaScript"));
//  // Output: "helloWorldFromJavaScript"


  function toCamelCase(str) {
    str = str.split(" ");
        for(let i = 1;i<str.length;i++) {
            str[i] = str[i][0].toUpperCase() + str[i].slice(1);

        }
  return str.join("");
  }
  console.log(toCamelCase("hello world from JavaScript"));
//   12. Write a function that finds and returns the most frequent character in a string. If multiple characters have the same frequency, return any one of them.
// console.log(mostFrequentCharacter("javascript")); // Output: "a" (or another character that appears most frequently)
function mostFrequentCharacter(str) {
    let arr = str.split("").sort();

    let maxCount = 1;
    let currentCount = 1;
    let mostFrequent = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                mostFrequent = arr[i - 1];
            }
            currentCount = 1; 
        }
    }

    // check last character group
    if (currentCount > maxCount) {
        mostFrequent = arr[arr.length - 1];
    }

    return mostFrequent;
}

console.log(mostFrequentCharacter("javascript"));
// 13. Write a function that converts a numeric string (e.g., "1234") into words
// console.log(numberToWords("1234")); // Output: "one thousand two hundred thirty-four"
        
   function numberToWords(numStr) {
    let num = Number(numStr);

    if (isNaN(num) || num < 0 || num > 9999) {
        return "Invalid input";
    }

    const ones = [
        "zero","one","two","three","four",
        "five","six","seven","eight","nine"
    ];

    const teens = [
        "ten","eleven","twelve","thirteen","fourteen",
        "fifteen","sixteen","seventeen","eighteen","nineteen"
    ];

    const tens = [
        "","","twenty","thirty","forty",
        "fifty","sixty","seventy","eighty","ninety"
    ];

    let result = "";

    // thousands
    if (num >= 1000) {
        result += ones[Math.floor(num / 1000)] + " thousand ";
        num %= 1000;
    }

    // hundreds
    if (num >= 100) {
        result += ones[Math.floor(num / 100)] + " hundred ";
        num %= 100;
    }

    // tens and ones
    if (num >= 20) {
        result += tens[Math.floor(num / 10)] + " ";
        num %= 10;
    } else if (num >= 10) {
        result += teens[num - 10] + " ";
        num = 0;
    }

    if (num > 0) {
        result += ones[num];
    }

    return result.trim();
}

console.log(numberToWords("3221"));


// 14. Write a function that performs basic string compression using the counts of repeated characters. If the compressed string is not shorter than the original, return the original string.
// console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
 function compressString(str) {
    let newstr = []
    let ccount = 1;
       for(let i=1;i<=str.length;i++) {
        if(str[i]  === str[i-1] ) {
            ccount ++;
        }
        else {
               newstr.push(str[i-1])   ;
               newstr.push (ccount);
               ccount =1;   
        }
       }
       return newstr.join("");
}
console.log(compressString("aabcccccaaa"));
// 15. Write a function that removes duplicate words from a sentence.
// console.log(removeDuplicateWords("this is is a test test")); // Output: "this is a test"
function removeDuplicateWords(str) {
    str = str.split(" ");
    let newstr = [];
    for(let i=0;i<str.length;i++) {
        if(!newstr.includes(str[i])) {
                 newstr.push(str[i]);
        }
    }
    return newstr.join(" ");
}
console.log(removeDuplicateWords("this is is a test test")); 