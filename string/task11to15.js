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

function mostFrequentCharacter(arr) {
    arr=arr.split("");
    arr =arr.sort();
let count =0;
let prevcount =0;
for(let i= 1;i<arr.length;i++) {
    if(arr[i] === arr[i-1] ) {
        count++;
    }
    else{
        count =1;
    }
}

}
console.log(mostFrequentCharacter("javascript")); 