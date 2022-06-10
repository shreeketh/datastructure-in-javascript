/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let result = null;
  let solved = false;

  // to get the position where we need to place number
  function getEmptyPosition() {
    let row;
    let col;
    let exist = false;

    for (let i = 0; i < board.length && !exist; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === ".") {
          row = i;
          col = j;
          exist = true;
          break;
        }
      }
    }

    if (exist) {
      return { row, col };
    } else {
      return null;
    }
  }

  // check whether the number can be placed or not
  function couldFitNumber(num, row, col) {
    // check on rows
    for (let i1 = 0; i1 < board[0].length; i1++) {
      if (board[row][i1] == num) {
        return false;
      }
    }

    // check on columns
    for (let i2 = 0; i2 < board.length; i2++) {
      if (board[i2][col] == num) {
        return false;
      }
    }

    // check on 3x3 box
    const divisionX = Math.floor(row / 3);
    const divisionY = Math.floor(col / 3);

    for (let i3 = divisionX * 3; i3 < divisionX * 3 + 3; i3++) {
      for (let j = divisionY * 3; j < divisionY * 3 + 3; j++) {
        if (board[i3][j] == num) {
          return false;
        }
      }
    }

    // we can fit the number
    return true;
  }

  function solve() {
    // find empty position
    const pos = getEmptyPosition();

    if (pos == null) {
      result = JSON.parse(JSON.stringify(board));
      solved = true;
      return;
    }

    // brute force 1-9
    for (let i = 1; i < 10; i++) {
      if (couldFitNumber(i, pos.row, pos.col)) {
        board[pos.row][pos.col] = `${i}`;
        solve();
        // backtrack only if the puzzle is not solved
        if (!solved) {
          board[pos.row][pos.col] = ".";
        }
      }
    }
  }

  solve();
  return result;
};


