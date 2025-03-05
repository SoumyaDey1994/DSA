function findKthHeighestElement(nums, k) {
    if(k > nums.length) return -1;

    const pivot = nums[0];
    const left=[], right=[];
    for(let index=1; index<nums.length; index++) {
        if(nums[index] > pivot) {
            left.push(nums[index]);
        } else {
            right.push(nums[index]);
        }
    }
    const pivotIndex = left.length+1;
    if(pivotIndex === k) {
        return pivot;
    } else if (k < pivotIndex){
        return findKthHeighestElement(left, k);
    } else {
        return findKthHeighestElement(right, k - pivotIndex);
    }
}

function findKthHeighestElementSol2(nums, k) {
    const minHeap = [];

    const sortHeapAsc = () => minHeap.sort((num1, num2) => num1 - num2); // ASC Sort

    for(let num of nums) { // O(n)
        minHeap.push(num);
        sortHeapAsc(); // O(kLogk)
        console.log("Pre-Shift: ",minHeap);
        if(minHeap.length > k) {
            minHeap.shift();
            console.log("Post-Shift: ",minHeap);
        }
    }
    return minHeap[0];
};

let nums = [1, 4, 7, 3, 2, 6, 9];
let k = 2;
console.log(`${k} heighest element is: ${findKthHeighestElement(nums, k)}`);

nums = [1, 4, 7, 3, 2, 6, 9, 11, 10, 8];
k = 7;
// console.log(nums.sort((a, b)=>b-a));
console.log(`${k} heighest element is: ${findKthHeighestElement(nums, k)}`);


nums = [3, 5, 1, 9, 4, 6];
k = 4;
// console.log(nums.sort((a, b)=>b-a));
console.log(`${k} heighest element is: ${findKthHeighestElementSol2(nums, k)}`);