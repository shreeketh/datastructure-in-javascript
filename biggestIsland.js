// time taken- 11: 50

/**
 * https://leetcode.com/problems/max-area-of-island/submissions/
 * @param {character[][]} grid
 * @return {number}.
 */
 var numIslands = function (matrix) {
    function updateIsland(i, j) {
      let area = 1
      matrix[i][j] = 0;
      // to right
      if (j < matrix[0].length - 1) {
        if (matrix[i][j + 1] == "1") {
          area = area + updateIsland(i, j + 1);
        }
      }
  
       // to bottom
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j] == "1") {
          area = area + updateIsland(i + 1, j);
        }
      }
  
      // to left
      if (j > 0) {
        if (matrix[i][j - 1] == "1") {
          area = area + updateIsland(i, j - 1);
        }
      }
  
      // to top
      if (i > 0) {
        if (matrix[i - 1][j] == "1") {
          area = area + updateIsland(i - 1, j);
        }
      }
  
      return area
    }
  
    let maxArea = 0
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] == "1") {
          const area = updateIsland(i, j);
          maxArea = (area > maxArea)? area: maxArea // use Math
        }
      }
    }
  
    return maxArea;
  };
  