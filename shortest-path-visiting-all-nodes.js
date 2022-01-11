/**
 * @param {number[][]} graph
 * @return {number}
 */
// TODO: Some corner cases are failing
var shortestPathLength = function (graph) {
    var map = {}
    var numberOfNodes = graph.length
    var result = 0

    // function to visit all nodes
    function visitNode(currentNode, visitedArr = [], paths = []) {
        if (visitedArr.length == numberOfNodes) {
            if (result == 0) {
                result = paths.length
            } else if (paths.length > 0) {
                result = Math.min(paths.length, result)
            }
        } else {
            for (var i = 0; i < numberOfNodes; i++) {
                if (graph[currentNode].includes(i) && !visitedArr[i]) {
                    visitNode(i, [...visitedArr, currentNode], [...paths, currentNode])
                }
            }
        }
    }

    // start from all nodes
    for (var i = 0; i < numberOfNodes; i++) {
        visitNode(i, [], [])
    }

    return result
};

