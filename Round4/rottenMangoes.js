/**
 * Date: 1st June, 2025
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
function findMinTimeToRotAllMangoes(grid) {
  if (!grid || grid.length === 0) return;

  const rowCount = grid.length,
    colCount = grid[0].length;
  const queue = [];
  let countOfFreshMangoes = 0,
    timeInMinutes = 0;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]); // [row, col, time=0]
      } else if (grid[i][j] === 1) {
        countOfFreshMangoes++;
      }
    }
  }

  if (countOfFreshMangoes === 0) return 0;
  while (queue.length > 0) {
    const [currRow, currCol, time] = queue.shift();
    timeInMinutes = time;

    // traverse all 4 direction
    // top
    if (currRow > 0 && grid[currRow - 1][currCol] === 1) {
      countOfFreshMangoes--;
      grid[currRow - 1][currCol] = 2;
      queue.push([currRow - 1, currCol, time + 1]);
    }
    // bottom
    if (currRow < rowCount - 1 && grid[currRow + 1][currCol] === 1) {
      countOfFreshMangoes--;
      grid[currRow + 1][currCol] = 2;
      queue.push([currRow + 1, currCol, time + 1]);
    }
    // left
    if (currCol > 0 && grid[currRow][currCol - 1] === 1) {
      countOfFreshMangoes--;
      grid[currRow][currCol - 1] = 2;
      queue.push([currRow, currCol - 1, time + 1]);
    }

    if (currCol < colCount - 1 && grid[currRow][currCol + 1] === 1) {
      countOfFreshMangoes--;
      grid[currRow][currCol + 1] = 2;
      queue.push([currRow, currCol + 1, time + 1]);
    }
  }

  return countOfFreshMangoes === 0 ? timeInMinutes : -1;
}

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(
  `No of mins required to rot all mangoes in grid: ${findMinTimeToRotAllMangoes(
    grid
  )}`
);

grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
console.log(
  `No of mins required to rot all mangoes in grid: ${findMinTimeToRotAllMangoes(
    grid
  )}`
);

grid = [
  [0, 1, 2],
  [1, 0, 1],
  [1, 0, 1],
];
console.log(
  `No of mins required to rot all mangoes in grid: ${findMinTimeToRotAllMangoes(
    grid
  )}`
);

grid = [
  [2, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(
  `No of mins required to rot all mangoes in grid: ${findMinTimeToRotAllMangoes(
    grid
  )}`
);

grid = [
  [2, 0, 0],
  [1, 0, 1],
  [1, 2, 1],
];
console.log(
  `No of mins required to rot all mangoes in grid: ${findMinTimeToRotAllMangoes(
    grid
  )}`
);
