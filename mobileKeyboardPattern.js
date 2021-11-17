var numMap = {
2: ['a', 'b', 'c'],
3: ['d', 'e', 'f'],
4: ['g', 'h', 'i'],
5: ['j', 'k', 'l'],
6: ['m', 'n', 'o'],
7: ['p', 'q', 'r', 's'],
8: ['t', 'u', 'v'],
9:  ['w', 'x', 'y', 'z']
}

var result = []

function findMatch(char){
const temp = []
numMap[char].forEach(element => {
    if(result.length){
        result.forEach(res => {
            temp.push(res+element)
        })
    } else {
        temp.push(element)
    }
});

result = temp
}

var input = 23;
`${input}`.split('').forEach(x => {
    findMatch(x)
})

console.log(result)