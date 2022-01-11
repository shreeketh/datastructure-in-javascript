function findLS(str1, str2) {
    if (str1.length == 0 || str2.length == 0) {
        return 0
    }

    if (str1[0] == str2[0]) {
        var len1 = findLS(str1.substring(1), str2.substring(2))
        var len2 = findLS(str1.substring(2), str2.substring(1))

        return (1 + Math.max(len1, len2))
    } else {
        var len1 = findLS(str1.substring(1), str2)
        var len2 = findLS(str1, str2.substring(1))

        return (Math.max(len1, len2))
    }
}

// findLS('ABCDGH', 'AEDFHR')
findLS('AGGTAB', 'GXTXAYB') //4
// number of calls: 1201

// ---------------------------------------------
// Let us optimise
var count = 0
var memoCount = 0
var memo = {}
function findLS(str1, str2){
count++
    if(str1.length == 0 || str2.length==0){
        return 0
    }
if(memo[`${str1}-${str2}`]){
    memoCount++
    return memo[`${str1}-${str2}`]
}

    if(str1[0] == str2[0]){
        var len1 = findLS(str1.substring(1), str2.substring(2))
        var len2 = findLS(str1.substring(2), str2.substring(1))
        var res = 1+Math.max(len1, len2)
        memo[`${str1}-${str2}`] = res

        return res
    } else {
        var len1 = findLS(str1.substring(1), str2)
        var len2 = findLS(str1, str2.substring(1))
        var res = Math.max(len1, len2)
        memo[`${str1}-${str2}`] = res

        return(res)
    }
}

// findLS('ABCDGH', 'AEDFHR')
console.log(findLS('AGGTAB', 'GXTXAYB')) // 4
console.log(count) // 73
console.log('From memo:', memoCount) // 25


