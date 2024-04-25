
function isPalindrome(word) {
  // Write your algorithm here
  if (typeof word == "string"){
    let name = word.toLocaleLowerCase();
   let reversedString = name.split("").reverse().join("");

   console.log(name)
   console.log(reversedString)

   if(name ==  reversedString){
   return true
  }else {
    return false
  }
}
}
let result_1 = isPalindrome("abba");
let result_2 = isPalindrome("racecar");
let result_3 = isPalindrome("a");
let result_4 = isPalindrome("robot");
let result_5 = isPalindrome("ab");
console.log(result_1, result_2, result_3, result_4, result_5)


/* 
  Add your pseudocode here
*/
//define a function called isPalindrome that takes a string as an inpute word.
//convert the string inpute word tolowerCase
//split the string, reverse the string and join the string back and store the result in a variable or do this within a condition.
//compare the string inpute with the result, if they match return true, in not return false.


/*
  Add written explanation of your solution here
*/
//'abba' ==splite - 'a' 'b' 'b' 'a'  == reverse   - 'a' 'b' 'b' 'a' ==join 'abba' => true

//'racecar' ==plite - 'r' 'a' 'c' 'e' 'c' 'a' 'r'  ==reverse- 'r' 'a' 'c' 'e' 'c' 'a' 'r' ==join  'racecar'=> trrue

// 'a' ==splite - 'a'  ==reverse- 'a' ==join 'a' => trrue

//'robot' ==splite 'r' 'o' 'b' 'o' 't'  ==reverse - 't' 'o' 'b' 'o' 'r' ==join 'tobor'  => false

//'ab' ==splite - 'a' 'b'    ==reverse - 'b' 'a' ==join 'ba' => false


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
