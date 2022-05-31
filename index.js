/* 1. Given a string (as a parameter), return the character that is most commonly used.*/

function maxChar(str) {
    let maxLength = 0
    let maxChar = ""
  
    let strArr = str.split("")
  
    for (let i = 0; i < strArr.length; i++) {
      let currChar = strArr[i]
      let currLength = str.split(currChar).length
  
      if (currLength > maxLength) {
        maxLength = currLength
        maxChar = currChar
      }
    }
    return maxChar
  }


/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

function isAnagram(str1, str2) {
  return str1.split("").sort().join() === str2.split("").sort().join()
}

// console.log(isAnagram("RAIL! SAFETY!", "fairy tales"))