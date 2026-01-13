
// 6. Create a function that repeats a given string n times without using the .repeat() method.
// console.log(repeatString("abc", 3)); // Output: "abcabcabc"
function repeatString(str,n) {
    str = str.split("");
            let arr = [];
            for(let i=0;i<n ;i++) {
                for(let j=0 ;j<str.length;j++) {

                    arr.push(str[j]);
                }
            }
            return arr.join('')
}
// function repeatString(str, n) {
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         result += str;
//     }
//     return result;
// }

console.log(repeatString("abc", 3))
// 7. Write a function that removes duplicate characters from a string.
// console.log(removeDuplicates("javascript")); // Output: "javscript"
function removeDuplicates(str) {
    str =str.split("");
    let arr =[]
    for (let i=0;i<str.length;i++) {
        if(!arr.includes(str[i])) {
            arr.push(str[i])
        }
    }
    return arr.join("");
}
 console.log(removeDuplicates("javascript"));
 
// 8. Create a function that counts the number of occurrences of a specific character in a string.
// console.log(countOccurrences("hello world", "l")); // Output: 3
function countOccurrences(str,char) {
   
      str = str.toLowerCase();
    char = char.toLowerCase(); let count =0;
     
    for(let i=0;i<str.length;i++) {
        if(str[i]===char) {
            count++;
        }
    }
    return count
}
console.log(countOccurrences("hello world", "l"));

// 9. Write a function that replaces all spaces in a string with a specific character (e.g., replace spaces with underscores).
// console.log(replaceSpaces("hello world", "_")); // Output: "hello_world"
function replaceSpaces(str, char ) {
    let arr = []
 for(let i =0;i<str.length;i++) {
    if(str[i] ===  " ") {
     arr.push(char);
    }
    else{

        arr.push(str[i])
    }
    
 }
 return arr.join("");

}
console.log(replaceSpaces("hello world", "_")); 
// function replaceSpaces(str, char) {
//     return str.replaceAll(" ", char);
// }
// 10. Write a function that extracts the domain name from a given URL string.
// console.log(extractDomain("https://www.example.com/path?name=value")); // Output: "example.com"
  function extractDomain(str) {
    let arr = str.split("/");
    let index = arr.indexOf("");
    let domain = arr[index + 1];

    if (domain.startsWith("www.")) {
        return domain.slice(4);
    }
    return domain; 
}
//  method 2 
// function extractDomain(url) {
//     url = url.replace("https://", "").replace("http://", "");
//     let domain = url.split("/")[0];
// if (domain.startsWith("www.")) {
//    return domain.replace("www.", "");
//     }
    
// }

console.log(extractDomain("https://www.example.com/path?name=value"));


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

