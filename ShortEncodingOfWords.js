/**
 * My Solution
 * TODO: Trai
 * @param {string[]} words
 * @return {number}
 */
 var minimumLengthEncoding = function(words) {
    const dataMap = {}
 
     words.forEach(word=>{
         let updated = false
         
     Object.keys(dataMap).forEach(sub => {
         if(word.endsWith(sub) || sub.endsWith(word)){
             updated = true
             delete dataMap[sub]
             dataMap[(word.length > sub.length ? word : sub)] = 1
         } 
     })
         if(!updated){
             dataMap[word] = 1
         }
         
     
 })
     return(Object.keys(dataMap).join('#').length+1)
 };