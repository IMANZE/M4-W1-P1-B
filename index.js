/* 1. Given a string (as a parameter), return the character that is most commonly used.*/

function maxChar(str) {
  let maxLength = 0;
  let maxChar = "";

  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    let currChar = strArr[i];
    let currLength = str.split(currChar).length;

    if (currLength > maxLength) {
      maxLength = currLength;
      maxChar = currChar;
    }
  }
  return maxChar;
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
  return str1.split("").sort().join() === str2.split("").sort().join();
}

// console.log(isAnagram("RAIL! SAFETY!", "fairy tales"))

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

function getAnagramFromList(str, arr) {
  const anagramsFound = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (isAnagram(str, word)) {
      anagramsFound.push(word);
    }
  }

  return anagramsFound;
}

// console.log(getAnagramFromList("listen", ["inlets", "google", "enlist", "banana"]))

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

function isPalindrome(str) {
  return (
    str.toLowerCase().split("").reverse().join() ===
    str.toLowerCase().split("").join()
  );
}

// console.log(isPalindrome(" ,abba, "));

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

    let reverseInt = n => {
      let str = n.toString()
      if (str.charAt(0) === "-") {
        return parseFloat("-" + str.substr(1, str.length).split("").reverse().join(""))
      }
      return parseFloat(str.split("").reverse().join(""))
    }
    
    console.log(reverseInt(-501))
