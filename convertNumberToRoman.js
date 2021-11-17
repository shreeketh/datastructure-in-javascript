/**
 * https://leetcode.com/problems/integer-to-roman/submissions/
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const numMap = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    const result = []
   const thousands =  Math.floor(num/1000)
   const FiveHundreds = Math.floor( (num % 1000) / 500)
   const NineHundred = Math.floor( (num % 1000) / 100)
   const hundreds = Math.floor( (num % 500) / 100)
   const fifties = Math.floor( (num % 100) / 50)
   const ninetys = Math.floor( (num % 100) / 10)
   const tens = Math.floor( (num % 50) / 10)
    const reminder = num % 10
    

     if(thousands){
        for(let x=0; x< thousands; x++){
            result.push(numMap[1000])
        }
    }  
    if(NineHundred !== 9){
         FiveHundreds && result.push(numMap[500])
    
    if(hundreds === 4){
        result.push(numMap[400])
    }
    else if(hundreds){
        for(let x=0; x< hundreds; x++){
            result.push(numMap[100])
        }
    }  
    } else {
        result.push(numMap[900])
    }
   
    if(ninetys !== 9) {
    fifties && result.push(numMap[50])
    
    if(tens === 4){
        result.push(numMap[40])
    }
    else if(tens){
        for(let x=0; x< tens; x++){
            result.push(numMap[10])
        }
    } 
} else {
    result.push(numMap[90])
}
    
    reminder && result.push(numMap[reminder])
    
    return result.join('')
};