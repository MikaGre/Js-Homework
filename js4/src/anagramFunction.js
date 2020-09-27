/*
For example:
Input: s = "anagram", t = "nagaram" // Output: true
Input: s = "rat", t = "car" // Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

let anagramChecker = (strA, strB) => {
//Checks that arguments provided are strings
if (typeof strA !== 'string' || typeof strB !== 'string') {
  return "Function only works with words"
}
//Checks that are arguments provided
if (strA.length === 0 || strB.length === 0) {
  return "Function needs two words"
}
//Checks if both words are the same
if (strA === strB) {
return "Function needs two DIFFERENT words"
}

  stringA = strA.replace(/[^\w]/g, '').toLowerCase()
  stringB = strB.replace(/[^\w]/g, '').toLowerCase()

  return sortString(stringA) === sortString(stringB)
}

/*This function sorts the strings*/ 
function sortString(string) {
  return string.split('').sort().join('');
}
    

  

module.exports = anagramChecker;
