// Task 14: getMin (Easy)
// Find the smallest number in an array (do not use Math.min).
//
// - Start with the first number, then compare every number with it.
// - Empty array: return null.

function getMin(numbers) {
  let min=numbers[0];
  if(numbers.length === 0) return null;
    for(const i of numbers){
  if(i < min){
    min = i;
  }
  
  }
  return min;
}

// Expected output:
console.log(getMin([3, 9, 4]));     // 3
console.log(getMin([-8, -2, -5]));  // -8
console.log(getMin([7]));           // 7
console.log(getMin([5, 1, 1]));     // 1
console.log(getMin([]));            // null


// let min=numbers[0];
  // for(const i of numbers){
  //   if (min <=  )
  // }
  //  return min;