/**
 * @param {number[][]} points
 * @return {number}
 * https://leetcode.com/problems/maximum-number-of-points-with-cost/
 */
// TODO: Some corner cases are failing
var maxPoints = function (points) {
    var MaxResult = 0

    function bfs(row, col, res) {
        if (row == points.length - 1) {
            MaxResult = Math.max(MaxResult, res)
            return
        }

        for (var i = 0; i < points[0].length; i++) {
            bfs(row + 1, i, (res + points[row][i] - Math.abs(col - i)))
        }
    }

    for (var i = 0; i < points[0].length; i++) {
        bfs(0, i, i)
    }
    return MaxResult

};