/**
 * https://leetcode.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var stack = [];
  var endPointer = 0;

  function processStr() {
    var str = "";
    var num = "";
    // pop until you find '['
    while (stack[stack.length - 1] != "[") {
      str = stack.pop() + str;
    }

    // if the top element is '[', remove it
    // if (stack[stack.length - 1] == "[") { 
      stack.pop();
    // }

    // extract number
    while (!isNaN(stack[stack.length - 1])) {
      num = `${stack.pop()}${num}`; // TODO - use pow
    }

    // convert string to number
    num = +num;

    // generate string
    return str.repeat(num);
  }

  while (endPointer < s.length) {
    if (s[endPointer] == "]") {
      endPointer++;
      const processedStr = processStr();
      stack = [...stack, ...processedStr];
      continue;
    }
    stack.push(s[endPointer]);
    endPointer++;
  }

  return stack.join("");
};

