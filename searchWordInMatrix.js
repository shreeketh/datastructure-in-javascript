/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    function compute(i, j, wordIndex){
        if(wordIndex-1 === word.length){
            return true
        }
        let didSomething = false
        // move left 
        if(j>0 && board[i][j-1] == word[wordIndex]){
            // j--
            didSomething = compute(i, j-1, wordIndex+1)
        }
        //move right
        if(j < (board[i].length-1) && board[i][j+1] == word[wordIndex]){
            // j++
            
                didSomething = compute(i, j+1, wordIndex+1)
        }
        // move top
        if(i>0 && board[i-1][j] == word[wordIndex]){
            // i-- 
                didSomething = compute(i-1, j, wordIndex+1)
        }
        //move bottom
        if(i<(board.length-1) && board[i+1][j] == word[wordIndex]){
            // i++
            
                didSomething = compute(i+1, j, wordIndex+1)
        }
        
        return didSomething 
    }
    
    let res = false
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === word[0]){
                if(compute(i,j, 1)){
                    res = true
                    
                }
            }
        }
    }
    
    return res
};
