/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
// Working solution 😄
var lengthOfLastWord = function (s) {
    return s.trim().split(' ').pop().length
};

/**
 * @param {string} s
 * @return {number}
 */
// Some cases are failing
var lengthOfLastWord = function (s) {
    if (!s) {
        return 0
    }
    var lastIndex = s.length - 1
    var from = lastIndex
    var res = -1

    for (var index = lastIndex; index >= 0; index--) {
        if (s[index] == ' ') {
            if (from == index) {
                from = index - 1
                continue;
            }

            res = from - index
            break
        }

    }

    if (res == -1 && s.length) {
        res = s.length
    }
    return res
};

// add one 
/**
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    return(`${(+digits.join('') +1)}`.split(''))
};