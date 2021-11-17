// time taken- 15:49

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (matrix) {
  function updateIsland(i, j) {
    matrix[i][j] = 0;
    // to right
    if (j < matrix[0].length - 1) {
      if (matrix[i][j + 1] == "1") {
        updateIsland(i, j + 1);
      }
    }

     // to bottom
    if (i < matrix.length - 1) {
      if (matrix[i + 1][j] == "1") {
        updateIsland(i + 1, j);
      }
    }

    // to left
    if (j > 0) {
      if (matrix[i][j - 1] == "1") {
        updateIsland(i, j - 1);
      }
    }

    // to top
    if (i > 0) {
      if (matrix[i - 1][j] == "1") {
        updateIsland(i - 1, j);
      }
    }
  }

  let count = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "1") {
        count++;
        updateIsland(i, j);
      }
    }
  }

  return count;
};
