/**
 * Problem Statement:
    There are three rods: A, B, and C.
    A certain number of disks (let's call it n) of different sizes are stacked on rod A in ascending order (largest disk at the bottom and smallest disk at the top).
    The goal is to move all the disks from rod A to rod C, using rod B as an auxiliary rod.
Rules:
    Only one disk can be moved at a time.
    A larger disk cannot be placed on top of a smaller disk.
    Each move must consist of taking the top disk from one rod and placing it on another rod.
 */
let count = 0;
function moveDisks(n, source, destination, auxiliary) {
  //base case
  if (n < 1) return;
  if (n === 1) {
    count++;
    console.log(`Move disk from ${source} to ${destination}`);
    return;
  }
  moveDisks(n - 1, source, auxiliary, destination, count);
  console.log(`Move disk from ${source} to ${destination}`);
  count++;
  moveDisks(n - 1, auxiliary, destination, source, count);
}

let numOfDisks = 3;
moveDisks(numOfDisks, "Src", "Dest", "Aux");
console.log(`\nNo of steps to move ${numOfDisks} is: ${count}`);

count=0;
numOfDisks = 5;
moveDisks(numOfDisks, "Src", "Dest", "Aux");
console.log(`\nNo of steps to move ${numOfDisks} is: ${count}`);
