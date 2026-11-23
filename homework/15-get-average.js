// Task 15: getAverage (Easy)
// Calculate the average of an array of numbers.
//
// - Average = sum / how many numbers.
// - Empty array: return 0.

function getAverage(numbers) {
  let total =0;
    if(numbers.length === 0) return 0;

  for(const i of numbers){
    total+=i;
    
  }
   const avg=total/numbers.length;
   return avg; 
  }

// Expected output:
console.log(getAverage([2, 4, 6]));  // 4
console.log(getAverage([10]));       // 10
console.log(getAverage([1, 2]));     // 1.5
console.log(getAverage([-4, 4]));    // 0
console.log(getAverage([]));         // 0
