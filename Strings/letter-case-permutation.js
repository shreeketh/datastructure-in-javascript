/**
 * https://leetcode.com/problems/letter-case-permutation/
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (ip) {
  var set = new Set([]);

  function backtrack(s, index) {
    if (s.length == index) {
      return;
    }

    if (isNaN(s[index])) {
      var temp = s.split("");

      if (s[index] == s[index].toLowerCase()) {
        temp[index] = temp[index].toUpperCase();
        var str = temp.join("");
        set.add(str);
        backtrack(str, index + 1);
      } else {
        temp[index] = temp[index].toLowerCase();
        var str = temp.join("");
        set.add(str);
        backtrack(str, index + 1);
      }
      temp[index] = s[index];
      var prevStr = temp.join("");
      set.add(prevStr);
      backtrack(prevStr, index + 1);
    } else {
      set.add(s);
      backtrack(s, index + 1);
    }
  }

  backtrack(ip, 0);

  return [...set];
};
