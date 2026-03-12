/**
 * Given a 2-D grid with 0 & 1
 * with 1 denoting presence of island piece &
 * 0 denoting absense of islands
 * Find no of concrete islands
 *
 * Input:
 * [
 *      1, 1
 *      1, 0
 * ]
 *
 * Output: 1
 */
function travarse(grid, rowVal, colVal) {
    // Base condition
  if (
    rowVal < 0 ||
    rowVal >= grid.length ||
    colVal < 0 ||
    colVal >= grid[rowVal].length ||
    grid[rowVal][colVal] === 0
  )
    return;

  // Mark as visited
  grid[rowVal][colVal] = 0;

  // Search vertically
  travarse(grid, rowVal - 1, colVal);
  travarse(grid, rowVal + 1, colVal);
  // Search horizontally
  travarse(grid, rowVal, colVal - 1);
  travarse(grid, rowVal, colVal + 1);
}

function findConcreteIslands(grid) {
  let count = 0;
  const rows = grid.length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        travarse(grid, i, j);
      }
    }
  }
  return count;
}

const grid = [
  [1, 0, 1, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];

// const grid = [[0], [1], [1]];

const islandCount = findConcreteIslands(grid);
console.log(`No of concrete islands: ${islandCount}`);
