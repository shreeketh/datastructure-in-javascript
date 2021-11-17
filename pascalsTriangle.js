/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const result = []
    
    for(let i=0; i<= numRows; i++){
        if(i<=2){
            result.push(new Array(i).fill(1))
        } else {
            const temp = []
            for(let j=0; j<i; j++){
                if(j==0 || j==i-1){
                    temp.push(1)
                } else {
                    temp.push(result[i-1][j-1] + result[i-1][j])
                }
            }
            result.push([...temp])
        }
    }
    
    result.shift()
    return result
};