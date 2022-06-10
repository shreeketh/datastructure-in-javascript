/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];

  if (s.length % 2 != 0) {
    return false;
  }

  for (var i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stack.push(s[i]);
    } else {
      if (s[i] == ")" && stack.pop() != "(") {
        return false;
      }

      if (s[i] == "]" && stack.pop() != "[") {
        return false;
      }

      if (s[i] == "}" && stack.pop() != "{") {
        return false;
      }
    }
  }

  if (stack.length == 0) {
    return true;
  }

  return false;
};
