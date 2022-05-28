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


