/**
 * Date: 9th March, 2025
 * Problem Statement: Word Search Problem
 * Given a m x n grid of characters (board) and a word (word), 
 * return true if the word exists in the grid. 
 * The word must be constructed from adjacent cells (horizontally or vertically), 
 * and the same cell cannot be used more than once.
 * Example 1:
 *      board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        word1 = "ABCCED";
            Output: true
            Explanation: The word "ABCCED" exists in the board
        word2 = "SEE";
            Output: true
            Explanation: The word "SSE" exists in the board
        word3 = "ABCB";
            Output: false
            Explanation: The word "ABCB" doesn't exists in the board
 * Example 2:
 *      board = [
            ["H", "E", "L", "L", "O"],
            ["T", "H", "E", "R", "E"],
            ["A", "B", "C", "D", "E"]
        ];
        word1 = "HELLO";
            Output: true
        word2: "THERE"
            Output: true
        word3: "WORLD"
            Output: false
 */

function isWordPresent(board, targetWord) {
  const rowCount = board.length;
  const colCount = board[0].length;

  function traverse(row, col, index) {
    if (index === targetWord.length) return true; // base case

    if (
      // For row & col no out of bound & char mismatch with board
      row < 0 ||
      row >= rowCount ||
      col < 0 ||
      col >= colCount ||
      board[row][col] !== targetWord[index]
    )
      return false;

    const currChar = board[row][col];
    board[row][col] = "$"; // Mark as read & update so can't get used further
    const isPresent =
      traverse(row, col - 1, index + 1) || // left
      traverse(row, col + 1, index + 1) || // right
      traverse(row - 1, col, index + 1) || // up
      traverse(row + 1, col, index + 1); // down

    board[row][col] = currChar; // restore char for further use
    return isPresent;
  }

  for (let i = 0; i < rowCount; i++) {
    for (j = 0; j < colCount; j++) {
      if (board[i][j] === targetWord[0] && traverse(i, j, 0)) return true;
    }
  }
  return false;
}

let board = [
  ["H", "E", "L", "L", "O"],
  ["T", "H", "E", "R", "C"],
  ["D", "E", "R", "O", "W"],
];
console.log();

let word1 = "HELLO";
let word2 = "CROW";
let word3 = "THERE";
console.log(`Word ${word1} present in board: ${isWordPresent(board, word1)}`);
console.log(`Word ${word2} present in board: ${isWordPresent(board, word2)}`);
console.log(`Word ${word3} present in board: ${isWordPresent(board, word3)}`);

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log();

word1 = "ABCCED";
word2 = "SEE";
word3 = "ABCB";
console.log(`Word ${word1} present in board: ${isWordPresent(board, word1)}`);
console.log(`Word ${word2} present in board: ${isWordPresent(board, word2)}`);
console.log(`Word ${word3} present in board: ${isWordPresent(board, word3)}`);

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log();
word1 = "SEE";
word2 = "BEE";
word3 = "ECE";
word4 = "CSE";
word5 = "DFS";
word6 = "BFS";

console.log(`Word ${word1} exists in board: ${isWordPresent(board, word1)}`);
console.log(`Word ${word2} exists in board: ${isWordPresent(board, word2)}`);
console.log(`Word ${word3} exists in board: ${isWordPresent(board, word3)}`);
console.log(`Word ${word4} exists in board: ${isWordPresent(board, word4)}`);
console.log(`Word ${word5} exists in board: ${isWordPresent(board, word5)}`);
console.log(`Word ${word6} exists in board: ${isWordPresent(board, word6)}`);