/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var res = 0;
  for (var i = 0; i < s.length; i++) {
    var temp = [s[i]];
    for (var j = i + 1; j < s.length; j++) {
      if (s[i] != s[j] && temp.indexOf(s[j]) == -1) {
        temp.push(s[j]);
      } else {
        break;
      }
    }
    res = Math.max(res, temp.length);
  }

  return res;
};
