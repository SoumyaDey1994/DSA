/**
 * Date: 16th May, 2026
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
function isWordExists(board, word) {
  if (!board || board.length === 0 || !word || word.length === 0) return;

  const rowCount = board.length,
    colCount = board[0].length;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (board[row][col] === word[0] && traverse(board, row, col, word, 0)) {
        return true;
      }
    }
  }

  return false;
}

function traverse(board, row, col, word, index) {
  const rowCount = board.length,
    colCount = board[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    board[row][col] !== word[index]
  )
    return;

  if (index === word.length - 1) return true;

  const temp = board[row][col];
  board[row][col] = "#";

  const isExists =
    traverse(board, row - 1, col, word, index + 1) ||
    traverse(board, row + 1, col, word, index + 1) ||
    traverse(board, row, col - 1, word, index + 1) ||
    traverse(board, row, col + 1, word, index + 1);

  board[row][col] = temp; // backtrack
  return isExists;
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
let word4 = "HERO";
let word5 = "WORLD";

console.log(`Word ${word1} present in board: ${isWordExists(board, word1)}`);
console.log(`Word ${word2} present in board: ${isWordExists(board, word2)}`);
console.log(`Word ${word3} present in board: ${isWordExists(board, word3)}`);
console.log(`Word ${word4} present in board: ${isWordExists(board, word4)}`);
console.log(`Word ${word5} present in board: ${isWordExists(board, word5)}`);

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log();

word1 = "ABCCED";
word2 = "SEE";
word3 = "ABCB";
console.log(`Word ${word1} present in board: ${isWordExists(board, word1)}`);
console.log(`Word ${word2} present in board: ${isWordExists(board, word2)}`);
console.log(`Word ${word3} present in board: ${isWordExists(board, word3)}`);

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

console.log(`Word ${word1} exists in board: ${isWordExists(board, word1)}`);
console.log(`Word ${word2} exists in board: ${isWordExists(board, word2)}`);
console.log(`Word ${word3} exists in board: ${isWordExists(board, word3)}`);
console.log(`Word ${word4} exists in board: ${isWordExists(board, word4)}`);
console.log(`Word ${word5} exists in board: ${isWordExists(board, word5)}`);
console.log(`Word ${word6} exists in board: ${isWordExists(board, word6)}`);
