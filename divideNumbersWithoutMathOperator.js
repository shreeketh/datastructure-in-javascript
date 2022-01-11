/**
 * https://leetcode.com/problems/divide-two-integers/solution/
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0 || divisor === 0) {
        return 0
    }

    var isNagative = false
    if (dividend < 0 && divisor < 0) {
        isNagative = false
    } else if (dividend < 0 || divisor < 0) {
        isNagative = true
    }

    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    var res = 0
    var temp = 0
    for (var x = 1; x <= dividend; x++) {
        temp++
        if (temp === divisor) {
            res++
            temp = 0
        }
    }

    return isNagative ? -(res) : res
};

// optimised
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0 || divisor === 0) {
        return 0
    }

    var isNagative = false
    if (dividend < 0 && divisor < 0) {
        isNagative = false
    } else if (dividend < 0 || divisor < 0) {
        isNagative = true
    }

    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    var res = 0
    var temp = dividend
    while (temp >= divisor) {
        temp = temp - divisor
        res++
    }

    return isNagative ? -(res) : res
};