// Given an array of N unsorted numbers. Return a list of numbers which can be found in the array using binary search.
// Ex: If the array is [4, 3, 5, 8, 9, 6, 7]  answer: 3, 5, 8, 10


function getSearchableEls(arr, min = -Infinity, max = Infinity) {
    var mid = Math.floor(arr.length / 2)

    if (arr.length == 0) {
        return arr
    }

    var midVal = arr[mid]

    var res = []

    res.push(midVal)

    recursinve(0, mid - 1, min, midVal)
    recursinve(mid + 1, arr.length - 1, min, max)

    function recursinve(indexStart, indexEnd, midVal, max) {

        if (indexStart > indexEnd) {
            return;
        }

        var secondMidIndex = Math.floor((indexStart + indexEnd) / 2)
        var secondMid = arr[secondMidIndex]

        if (secondMid > min && secondMid < max) {
            res.push(secondMid)
        }

        recursinve(0, secondMidIndex - 1, min, Math.min(midVal, max))
        recursinve(secondMidIndex + 1, arr.length - 1, Math.max(midVal, min), max)
    }

    return res
}

/**
 * - Came with brute force approach
 * 
 */