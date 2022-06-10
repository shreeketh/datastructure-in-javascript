/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  var result = [];

  function backtrack(res, arr) {
    var tmpArr = [...arr];
    var temp = res;
    if (arr.length == 0 && res) {
      result.push(res);
    }

    var key = tmpArr.shift();
    if (key) {
      map[key].forEach((char) => {
        temp += char;
        backtrack(temp, tmpArr);
        temp = temp.slice(0, -1);
      });
    }
  }

  backtrack("", digits.split(""));
  return result;
};

