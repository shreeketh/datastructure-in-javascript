/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var result = ''
    for (var x = 0; x < s.length; x++) {
        const res = expandAndCheck(s, x)
        if (res.length > result.length) {
            result = res
        }
    }
    return result
};

function expandAndCheck(s, charPosition) {
    let left = charPosition
    let right = charPosition
    let res = s[charPosition]

    if (charPosition < s.length - 1 && s[charPosition - 1] == s[charPosition]) {
        res = s.substring(charPosition, charPosition + 1)
    }

    if (charPosition > 0 && s[charPosition] == s[charPosition - 1]) {
        res = s.substring(charPosition - 1, charPosition + 1)
    }


    while (left > 0 && right < s.length - 1) {
        if (s[left] == s[right]) {
            left--
            right++
        } else {
            break
        }
    }

    const temp = s.substring(left, right)
    if (temp.length > res.length) {
        res = temp
    }

    return res
}