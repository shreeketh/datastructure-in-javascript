/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var res = strs[0];

  strs.forEach((item) => {
    var tmp = "";
    var len = Math.min(item.length, res.length);
    for (var i = 0; i < len; i++) {
      if (item[i] === res[i]) {
        tmp += item[i];
      } else {
        break;
      }
    }
    res = tmp;
  });

  return res;
};
