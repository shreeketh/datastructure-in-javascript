var generateParantheses = (count)=>{
    const result = [];

    function generateBrackets(n, opens, closes, str){
        if(str.length === 2*n){
            result.push(str)
            return
        }

        if(opens < n){
            generateBrackets(n, opens+1, closes, str + '(')
        }

        if(closes < opens) {
            generateBrackets(n, opens, closes+1, str + ')')
        }
    }
    generateBrackets(count, 0, 0, '')
return result
}

generateParantheses()