/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {

    var result = []
    // create an empty board
    var board = new Array(n).fill('.').map(() => new Array(n).fill('.'));

    function canIplaceQueen(row, col) {
        var res = true
        //check row
        for (var x = 0; x < n; x++) {
            if (board[row][x] != '.') {
                res = false
                break
            }

            if (board[x][col] != '.') {
                res = false
                break
            }

            // check dioganal
            var newRow = row - x
            var newCol = col - x
            if (newRow < n && newRow >= 0 && newCol < n && newCol >= 0) {
                if (board[newRow][newCol] != '.') {
                    res = false
                    break
                }
            }
        }
        return res
    }

    function solve() {
        var numberOfQueensPlaced = 1

        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (canIplaceQueen(i, j)) {
                    board[i][j] = 'Q'
                    numberOfQueensPlaced++
                    break
                }
            }
        }

        var temp = []
        board.forEach((a = []) => {
            temp.push(a.join(''))
        })

        if (numberOfQueensPlaced == n) {
            result.push(temp)
        }

    }

    for (var k = 0; k < n; k++) {
        board = new Array(n).fill('.').map(() => new Array(n).fill('.'));
        board[0][k] = 'Q'
        solve()

    }

    return result
};