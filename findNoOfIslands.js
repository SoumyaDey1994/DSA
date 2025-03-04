/**
 * Given a 2D grid consisting of 1s (land) and 0s (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are surrounded by water.
 * 
 * Input: [
        [1, 1, 1],
        [1, 1, 0],
        [0, 0, 1],
        [0, 0, 0]
    ]
    Output: 2
 */

function searchAdjacentIslands(input, row, col) {
  //Base condition
  if (
    row < 0 ||
    row >= input.length ||
    col < 0 ||
    col >= input[row].length ||
    input[row][col] === 0
  ) {
    return;
  }

  // Mark the cell as visited by setting it to '0'
  input[row][col] = 0;
  // Searh vertically
  searchAdjacentIslands(input, row - 1, col);
  searchAdjacentIslands(input, row + 1, col);
  // Searh horizontally
  searchAdjacentIslands(input, row, col - 1);
  searchAdjacentIslands(input, row, col + 1);
}

function getNoOfIslands(input) {
  const rowLength = input.length;
  let noOfIslands = 0;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] === 1) {
        noOfIslands++;
        searchAdjacentIslands(input, row, col);
      }
    }
  }
  return noOfIslands;
}

let input = [
  [1, 1, 1, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
];
console.log(`No of Islands: ${getNoOfIslands(input)}`);
