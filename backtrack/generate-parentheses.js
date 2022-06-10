/**
 * https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = new Set([]);
  function generate(str, opens, closes) {
    if (str.length == n * 2) {
      res.add(str);
      return;
    }
    if (opens < n) {
      generate(str + "(", opens + 1, closes);
    }
    if (opens > closes) {
      generate(str + ")", opens, closes + 1);
    }
  }

  generate("", 0, 0);
  return [...res];
};
