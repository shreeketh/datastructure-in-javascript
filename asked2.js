/*
A	B	C	D	E
F	G	H	I	J
K	L	M	N	O	
P	Q	R	S	T
U	V	W	X	Y	
Z	9	9	9	9

U (Up)
D (Down)
L (Left)
R (Right)
! (Enter)

Input: "CARS"
Output: "RR!LL!RRDDD!R!"

(3,2) -> (0,5)
(3-0): up move
(2-0): left

Given a matrix of characters, find number of moves required to reach the perticular character, use "!" once reach the target and move to nect character
tevel starts from A
*/


var matrix = 
   [["A", "B", "C", "D", 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T']
    ['U', 'V', 'W', 'X', 'Y']
    ['Z', '9', '9', '9', '9']]

function goTo(from, to) { 
    var currentRow = from[0]
    var currentCol = from[1]
    var targetRow = to[0]
    var targetCol = to[1]

    var res = []

    // detect horizonatl Movement
    if (currentCol < targetCol) { // move left
        res.concat(new Array(targetCol - currentCol).fill('L')).push('!')
    } else if (currentCol > targetCol) { // move right
        res.concat(new Array(currentCol - currentCol).fill('R')).push('!')
    }

    // detect vertical movement
    if (currentRow < targetRow) { // move down
        res.concat(new Array(targetRow - currentRow).fill('D')).push('!')

    } else if (currentRow > targetRow) { // move up
        res.concat(new Array(currentRow - targetRow).fill('U')).push('!')
    }

    return res.join('')
}


function getXY(char) { // memoize
    var diff = getAcci(char) - getAcci(A)
    var x = Math.floor(diff / 5)
    var y = Math.floor(diff % 5) // revisit to check -1
    return ([x, y])

}


function getMovement(str) {
    var res = ''
    var strArr = str.split('')
    var from = getAcci('A') // 65


    strArr.forEach(char => {

        var char = getXY(char)

        res += goTo(from, char)
        from = char

    })

    return res
}

