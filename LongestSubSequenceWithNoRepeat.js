/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length == 1) {
        return 1
    }

    var right = 0
    var left = 0
    var maxLength = 0
    var charMap = {}

    for (var x = 0; x < s.length; x++) {
        if (charMap[s[x]] == true) {
            left = right
            charMap = {}
            left = right

        } else {
            right++
            charMap[s[x]] = true
        }
        maxLength = Math.max(maxLength, right - left)

    }

    return maxLength
};