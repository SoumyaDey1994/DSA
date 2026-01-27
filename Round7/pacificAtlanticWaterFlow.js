/**
 * Date: 27th Jan, 2026
 * Pacific Atlantic Water Flow - DFS Solution
 * You are given an m x n matrix representing the heights of a terrain.
 * Water can flow only from a higher or equal height to a lower height in 4 directions (up, down, left, right).
 *      The Pacific Ocean is on the top and left edges.
 *      The Atlantic Ocean is on the bottom and right edges.
 *      You need to find all the coordinates (cells) from where water can reach both oceans.
 */
function findCoordinates(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];

  const rowCount = matrix.length,
    colCount = matrix[0].length;

  const pacific = new Array(rowCount)
    .fill()
    .map(() => new Array(colCount).fill(false));
  const atlantic = new Array(rowCount)
    .fill()
    .map(() => new Array(colCount).fill(false));
  
    const output = [];

  for (let row = 0; row < rowCount; row++) {
    traverse(row, 0, pacific, matrix); // left col
    traverse(row, colCount - 1, atlantic, matrix); // right col
  }

  for (let col = 0; col < colCount; col++) {
    traverse(0, col, pacific, matrix); // top row
    traverse(rowCount - 1, col, atlantic, matrix); // bottom row
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        output.push([row, col]);
      }
    }
  }

  return output;
}

function traverse(row, col, ocean, matrix) {
    const rowCount = matrix.length,
        colCount = matrix[0].length;

    if(row < 0 || row >=rowCount || col<0 || col >= colCount || ocean[row][col] === true) return;

    // mark as true
    ocean[row][col] = true;

    // Traverse in all posibile direction with constrain check
    if(row > 0 && matrix[row-1][col] >= matrix[row][col]) {
        traverse(row-1, col, ocean, matrix); // up-->down
    }

    if(row < rowCount-1 && matrix[row+1][col] >= matrix[row][col]) {
        traverse(row+1, col, ocean, matrix); // down-->up
    }

    if(col > 0 && matrix[row][col-1] >= matrix[row][col]) {
        traverse(row, col-1, ocean, matrix); //left-->right
    }

    if(col < colCount-1 && matrix[row][col+1] >= matrix[row][col]) {
        traverse(row, col+1, ocean, matrix);  //right-->left
    }
}

let matrix = [
  [1, 2],
  [4, 1],
];
let commonCoord = findCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);


matrix = [
  [3, 4, 4],
  [5, 3, 1],
];
commonCoord = findCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);

matrix = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
commonCoord = findCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);
