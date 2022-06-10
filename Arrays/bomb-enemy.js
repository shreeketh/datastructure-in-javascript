/**
 * https://leetcode.com/problems/bomb-enemy/
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function (grid) {
  var res = 0;
//   var dp = new Array(grid.length).fill().map(()=> new Array(grid[0].length).fill(0));

  function checkKillCount(row, col) {
    var count = 0;
    // up
    for (var i = row; i >= 0; i--) {
      if (grid[i][col] == "E") {
        count++;
      } else if (grid[i][col] == "W") {
        break;
      }
    }

    // down
    for (var i = row; i < grid.length; i++) {
      if (grid[i][col] == "E") {
        count++;
      } else if (grid[i][col] == "W") {
        break;
      }
    }

    // left
    for (var i = col; i >= 0; i--) {
      if (grid[row][i] == "E") {
        count++;
      } else if (grid[row][i] == "W") {
        break;
      }
    }

    // right
    for (var i = col; i < grid[0].length; i++) {
      if (grid[row][i] == "E") {
        count++;
      } else if (grid[row][i] == "W") {
        break;
      }
    }

    return count;
  }

  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == "E" || grid[row][col] == "W") {
        continue;
      }

      if (grid[row][col] == "0") {
        var kills = checkKillCount(row, col);
        res = Math.max(res, kills);
      }
    }
  }

  return res;
};
