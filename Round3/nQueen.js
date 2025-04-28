/**
 * Date: 28th April, 2025
 * Problem Statement: N-Queens Problem
 * we need to place N queens on an N × N chessboard such that:
 *      1. No two queens attack each other.
 *      2. A queen can move vertically, horizontally, or diagonally, so we must ensure that:
 *          a. No two queens are in the same row.
 *          b. No two queens are in the same column.
 *          c. No two queens are in the same diagonal.
 * Example 1:
 *      N = 1,
 *      Output: Q
 * Example 2:
 *      N = 2
 *      Output: No valid solution because any placement of two queens results in an attack.
 */
function solveNQueen(n) {
    if(n<=0) return;

    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
    const result = [];
    backtrack(0, n, board, result);
    return result;
}

function backtrack(row, noOfRows, board, result) {
    if(row === noOfRows) {
        result.push(board.map(r => r.join("   ")));
        return;
    }

    for(let col=0; col < noOfRows; col++) {
        const isQueenSafe = isSafe(row, col, noOfRows, board);
        if(isQueenSafe) {
            board[row][col] = 'Q';
            backtrack(row+1, noOfRows, board, result); // check for next row
            board[row][col] = '.'; // backtrack
        }
    }
}

function isSafe(row, col, noOfRows, board) {
    // same col
    for(let i=0; i<row; i++) {
        if(board[i][col] === 'Q') return false;
    }
    // diagonal from bottom-right to top-left
    for(let i=row, j=col; i>=0 && j>=0; i--, j--) {
        if(board[i][j] === 'Q') return false;
    }

    // diagonal from bottom-left to top-right
    for(let i=row, j=col; i>=0 && j<noOfRows; i--, j++) {
        if(board[i][j] === 'Q') return false;
    }

    return true;
}

let output = solveNQueen(1);
console.log(`N-Queen for N:1`);
console.log(output);

output = solveNQueen(4);
console.log(`N-Queen for N:4`);
console.log(output);

output = solveNQueen(6);
console.log(`N-Queen for N:6`);
console.log(output);
