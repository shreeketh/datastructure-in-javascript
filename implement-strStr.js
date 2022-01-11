/**
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack == needle || needle.length == 0) {
        return 0;
    }

    if (haystack.length == 0) {
        return -1;
    }

    var res = -1;

    for (var i = 0; i <= (haystack.length - needle.length); i++) {
        var isMatching = false
        for (var j = i; j < (i + needle.length); j++) {
            if (haystack[j] != needle[j - i]) {
                isMatching = false;
                break;
            }

            if (j == (i + needle.length - 1)) {
                isMatching = true
            }
        }

        if (isMatching) {
            res = i;
            break;
        }
    }

    return res
};