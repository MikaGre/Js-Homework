/*
For example: [342, 1002, 523] should become 
[371.92, 1089.67, 568.76], given the tax of 8.875%.
*/


let addTax = (receiptTotals) => {
//checks for negative numbers
for(i = 0; i < receiptTotals.length; i++){
  if(receiptTotals[i] < 0) {
    return "Function needs positive numbers"
  }
}
//checks for numbers
for(i = 0; i < receiptTotals.length; i++){
  if (typeof receiptTotals[i] !== 'number') {
    return "Function ONLY works with numbers"
  }
}
//checks for empty array
if (receiptTotals.length <= 0) {
  return "Array is empty"
}

    let fixedTotals = receiptTotals.map(n => n * 1.08875) 
    return fixedTotals.map(n => n.toFixed(2))  
  }
module.exports = addTax;
