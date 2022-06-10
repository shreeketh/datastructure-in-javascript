/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var res = "";

  for (var i = 0; i <= s.length; i++) {
    var start = 1;
    var end = 1;

    while (i - start >= 0 && i + end < s.length) {
      if (s[i] == s[i - 1]) {
        start++;
        var tmp = s.substr(i - start, i + end + 1);
        if (res.length < tmp.length) {
          res = tmp;
        }
      }

      if (s[i] == s[i + 1]) {
        end++;
        var tmp = s.substr(i - start, i + end + 1);

        if (res.length < tmp.length) {
          res = tmp;
        }
      }

      if (s[i - start] == s[i + end]) {
        var tmp = (res = s.substr(i - start, i + end + 1));
        if (res.length < tmp.length) {
          res = tmp;
        }
        start++;
        end++;
      } else {
        break;
      }
    }
  }

  return res;
};
