/*
For example: [342, 1002, 523] should become 
[371.92, 1089.67, 568.76], given the tax of 8.875%.
*/


let addTax = (receiptTotals) => {
//checks for empty array
if (receiptTotals.length === 0) {
  return "Array is empty"
}

//checks for negative numbers and input type 
for(const total in receiptTotals){
  if(receiptTotals[total] < 0 || typeof receiptTotals[total] !== 'number') {
    return "Invalid numbers"
  }
}

    let fixedTotals = receiptTotals.map(n => n * 1.08875) 
    return fixedTotals.map(n => n.toFixed(2))  
   // return receiptTotals.map.map(input =>(input * 1.08875).toFixed(2))
  }
module.exports = addTax;
