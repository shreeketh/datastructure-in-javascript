// Working

/**
 * https://leetcode.com/problems/n-queens/
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var res = [];
  var positiveSet = new Set([]);
  var negativeSet = new Set([]);
  var col = new Set([]);
  var matrix = new Array(n).fill(".").map(() => new Array(n).fill("."));

  function backTrack(row) {
    if (row == n) {
      var temp = [];
      matrix.forEach((m) => temp.push(m.join("")));
      res.push(temp);
      return;
    }
    for (var i = 0; i < n; i++) {
      if (positiveSet.has(row + i) || negativeSet.has(i - row) || col.has(i)) {
        continue;
      }

      col.add(i);
      matrix[row][i] = "Q";
      positiveSet.add(row + i);
      negativeSet.add(i - row);

      backTrack(row + 1);

      col.delete(i);
      positiveSet.delete(row + i);
      negativeSet.delete(i - row);
      matrix[row][i] = ".";
    }
  }

  backTrack(0);
  return res;
};

/**
 * https://leetcode.com/problems/n-queens-ii/
 * @param {number} n
 * @return {number}
 */
 var totalNQueens = function(n) {
    var res = 0
  var positiveSet = new Set([]);
  var negativeSet = new Set([]);
  var col = new Set([]);
  var matrix = new Array(n).fill(".").map(() => new Array(n).fill("."));

  function backTrack(row) {
    if (row == n) {
      res++
      return;
    }
    for (var i = 0; i < n; i++) {
      if (positiveSet.has(row + i) || negativeSet.has(i - row) || col.has(i)) {
        continue;
      }

      col.add(i);
      matrix[row][i] = "Q";
      positiveSet.add(row + i);
      negativeSet.add(i - row);

      backTrack(row + 1);

      col.delete(i);
      positiveSet.delete(row + i);
      negativeSet.delete(i - row);
      matrix[row][i] = ".";
    }
  }

  backTrack(0);
  return res;
};

/**
 * NoT WORKING
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n == 1) {
    return [["Q"]];
  }

  var ans = [];

  function chechWhetherIcanPlace(matrix, col, row) {

    for (var i = 0; i < matrix.length; i++) {
      if (matrix[row][i] == "Q" || matrix[i][col] == "Q") {
        return false;
        break;
      }
    }

    for (var i = 0; i < matrix.length; i++) {
      if (col - i >= 0 && row - i >= 0 && matrix[col - i][row - i] == "Q") {
        return false;
        break;
      }
      if (col - i >= 0 && row + i < n && matrix[col - i][row + i] == "Q") {
        return false;
        break;
      }

      if (col + i < n && row + i < n && matrix[col + i][row + i] == "Q") {
        return false;
        break;
      }

      if (col + i < n && row - i >= 0 && matrix[col + i][row - i] == "Q") {
        return false;
        break;
      }
    }

    return true;
  }

  function evaluatePlacement(matrix) {
    var count = 1;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (chechWhetherIcanPlace(matrix, i, j)) {
          matrix[i][j] = "Q";
          count++;
          break;
        }
      }
    }
    if (count == n) {
      var res = [];
      matrix.forEach((x) => {
        res.push(x.join(""));
      });
      ans.push(res);
    }
  }

  for (var i = 0; i < n; i++) {
    var temp = new Array(n).fill(".").map(() => new Array(n).fill("."));

    temp[0][i] = "Q";
    evaluatePlacement(temp);
  }

  return ans;
};
