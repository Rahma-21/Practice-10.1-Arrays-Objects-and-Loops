// Task 2: getLastItem (Warm-up)
// Return the last item of an array.
//
// - Use items.length to find the last index.
// - Empty array: return null.

function getLastItem(items) {
  // return items[items.length-1];
  return items.pop() || null; // يعطينا ويحذف اخر data
}

// Expected output:
console.log(getLastItem(["a", "b", "c"]));  // "c"
console.log(getLastItem([10, 20]));         // 20
console.log(getLastItem(["only"]));         // "only"
console.log(getLastItem([]));               // null
