/**
 * https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  var res = 0;
  for (var i = 0; i < s.length; i++) {
    var set = new Set();
    var count = 0;
    for (var j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        count++;
        res = Math.max(res, count);
      } else if (set.size < 2) {
        count++;
        res = Math.max(res, count);
        set.add(s[j]);
      } else {
        res = Math.max(res, count);
        break;
      }
    }
  }

  return res;
};

/**
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  var res = 0;
  for (var i = 0; i < s.length; i++) {
    var set = new Set();
    var count = 0;
    for (var j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        count++;
        res = Math.max(res, count);
      } else if (set.size < k) {
        count++;
        res = Math.max(res, count);
        set.add(s[j]);
      } else {
        res = Math.max(res, count);
        break;
      }
    }
  }

  return res;
};

function test(N, X) {
  var count = 0;

  for (var i = 1; i <= N; i++) {
    if (X % i == 0 && X / i <= N) count++;
  }

  return count;
}


