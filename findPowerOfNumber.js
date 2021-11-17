// TODO: Make it recursive
// Handle uncached value calculation 

function findPowerOfANumber(num, pow){
    let currentPow = 2
    let currentVal = num*num
    const cache = {}
    cache['1'] = num
    cache['2'] = num*num
if(pow > 2){
    while(currentPow < pow){
        if(currentPow+currentPow > pow){
        const remaining = pow-currentPow
        currentVal = currentVal*(cache[remaining] || 1)
        break;
        }
        currentPow = currentPow+currentPow
        currentVal = currentVal*currentVal
        cache[`${currentPow}`] = currentVal
    }
}

console.log(currentPow, currentVal)

}