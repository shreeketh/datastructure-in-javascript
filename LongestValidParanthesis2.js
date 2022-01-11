// NOT WORKING, try dp

/**
 * https://leetcode.com/problems/longest-valid-parentheses/solution/
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    
    var arr = s.split('')
    var res = 0
    
    if(s.length < 2){
        return res
    }
     
    for(var x=0; x<arr.length; x++){
         for(var y=x; y<=arr.length; y++){
            if(isValid(s.substr(x, y))){
                var calculatedRes = x==0?y : (y-x)+1
                res = Math.max(res, calculatedRes)
            }
        }
    }
  
    return res
};

 
    function isValid(str){
        var temp=[]
        if(!str || str.length % 2 == 1){
            return false
        }
        
        var res = true
        str.split('').forEach(x=>{
            if(x=='('){
                temp.push('(')
            } else {
                if(temp.length === 0){
                    res = false
                } else {
                    temp.pop()
                }
            }
        })
        return (res && !temp.length)
    }
    