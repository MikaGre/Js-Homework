/*
Example:
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
Note:
Try to:
- Do this in-place without making a copy of the array
- Minimize the total number of operations
*/
let moveZero =  (numArray) => {
    //Checks array for non numbers
    for (i = 0; i < numArray.length; i++) {
      if (typeof numArray[i] !== 'number') {
        return "Function only works with numbers"
        }
    };
    //checks for empty array
    if (numArray.length <= 0) {
        return "Array is empty"
    }
    
    for (i = numArray.length-1; i >= 0; i--) {
        if (numArray[i] === 0) {
          numArray.splice(i,1);
          numArray.push(0); 
        }
      }
    return numArray
    }
    
    module.exports = moveZero;
