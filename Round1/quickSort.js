/**
 * Date: 17th Jan, 2025
 *       3rd Feb, 2025
 * Quick sort algorithm
 */

function quickSort(arr) {
  const length = arr.length;
  if (length <= 1) return arr;

  const left = [],
    right = [];
  const pivot = arr[0];
  for (let index = 1; index < length; index++) {
    const ele = arr[index];
    if (ele < pivot) left.push(ele);
    else right.push(ele);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [3, 1];
console.log(`Sorted List (quickSort): ${quickSort(arr)}`);

arr = [3, 1, 5, 7, 9, 2, 4];
console.log(`Sorted List (quickSort): ${quickSort(arr)}`);

arr = [10, 15, 12, 18, 20, 11, 25, 23, 21];
console.log(`Sorted List (quickSort): ${quickSort(arr)}`);

arr = [5];
console.log(`Sorted List (quickSort): ${quickSort(arr)}`);

arr = [5, 7, 10, 12];
console.log(`Sorted List (quickSort): ${quickSort(arr)}`);

arr = [7, 5, 18, 12, 15];
console.log(`Sorted List (quickSort): ${quickSort(arr)}`);
