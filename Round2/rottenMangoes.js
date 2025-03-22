/**
 * Date: 22nd March, 2025
 * Problem Statement: Rotten Mangoes Problem
 * You are given a grid (matrix) of size M x N, 
 * where each cell can have one of the following values:
 *      0 → An empty cell, 1 → A fresh mango, 2 → A rotten mango.
 * Every minute, a rotten mango can rot its adjacent fresh mangoes (up, down, left, right).
 * Return the minimum time required for all fresh mangoes to rot.
 * If it is impossible to rot all mangoes, return -1.
 * Example:
 *      grid = [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
        ]
    Output: 4
    Explanation:
        Minute 1: Rotten mango at (0,0) rots (0,1) and (1,0).
        Minute 2: Rotten mangoes at (0,1) and (1,0) rot (0,2), (1,1), and (2,1).
        Minute 3: Rotten mangoes at (0,2), (1,1), and (2,1) rot (1,2) and (2,2).
        Minute 4: Rotten mango at (1,2) rots (2,2).
 */

function getTimeInMinutesCount(grid) {
  if (!grid || grid.length === 0) return -1;
  const length = grid.length;

  const queue = [];
  let freshMangoCounts = 0;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (grid[i][j] === 2) {
        // positions where rotten mango present
        queue.push([i, j, 0]);
      } else if (grid[i][j] === 1) {
        // count no of fresh mangoes
        freshMangoCounts++;
      }
    }
  }
  // If no rotten mango, exit immediately
  if (freshMangoCounts === 0) return 0;

  let minute = 0;
  while (queue.length > 0) {
    const [row, col, noOfMinutes] = queue.shift();
    minute = noOfMinutes;
    // Traverse for valid conditions
    if (row > 0 && grid[row - 1][col] === 1) {
      // Mark as rotten
      grid[row - 1][col] = 2;
      freshMangoCounts--;
      queue.push([row - 1, col, noOfMinutes + 1]); //up
    }
    if (row < length - 1 && grid[row + 1][col] === 1) {
      // Mark as rotten
      grid[row + 1][col] = 2;
      freshMangoCounts--;
      queue.push([row + 1, col, noOfMinutes + 1]); // down
    }
    if (col > 0 && grid[row][col - 1] === 1) {
      // Mark as rotten
      grid[row][col - 1] = 2;
      freshMangoCounts--;
      queue.push([row, col - 1, noOfMinutes + 1]); // left
    }

    if (col < length - 1 && grid[row][col + 1] === 1) {
      // Mark as rotten
      grid[row][col + 1] = 2;
      freshMangoCounts--;
      queue.push([row, col + 1, noOfMinutes + 1]); // right
    }
  }
  return freshMangoCounts === 0 ? minute : -1;
}

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
let timeInMinutes = getTimeInMinutesCount(grid);
console.log(`Time need to rot all mangoes: ${timeInMinutes}`);

grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
timeInMinutes = getTimeInMinutesCount(grid);
console.log(`Time need to rot all mangoes: ${timeInMinutes}`);

grid = [
  [0, 1, 2],
  [1, 0, 1],
  [1, 0, 1],
];
timeInMinutes = getTimeInMinutesCount(grid);
console.log(`Time need to rot all mangoes: ${timeInMinutes}`);

grid = [
  [2, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
];
timeInMinutes = getTimeInMinutesCount(grid);
console.log(`Time need to rot all mangoes: ${timeInMinutes}`);

grid = [
  [2, 0, 0],
  [1, 0, 1],
  [1, 2, 1],
];
timeInMinutes = getTimeInMinutesCount(grid);
console.log(`Time need to rot all mangoes: ${timeInMinutes}`);
