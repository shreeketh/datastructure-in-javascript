
var combinationSum22 = function(candidates, target) {

    const resultMap = {};

  function helper(remainingArr, result) {

    if (result.reduce((a, b) => a + b, 0) === target) {
        const key = result.sort().join('')
        if(key && !resultMap[key]){
            resultMap[key] = result;
        }
      return;
    } else {
      [...remainingArr].forEach((element, index) => {
        if (result.reduce((a, b) => a + b, 0) + element <= target) {
            const remaining = remainingArr
            remaining.splice(index, 1)
            helper([...remaining], [...result, element]);
        }
      });
    }
  }
  helper(candidates, []);
  return Object.values(resultMap)

};

console.log(combinationSum22([2,3,6,7], 7))