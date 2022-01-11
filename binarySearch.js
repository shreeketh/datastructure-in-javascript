function binSearch(arr, target){
    let start = 0;
    let end = arr.length -1
    let result = -1

    while(start < end){
        let mid = Math.floor((start + end)/2)
        if(arr[mid] == target){
            result = mid
            break
        }
        else if(target > arr[mid]){
            start = mid +1
        }
        else if(target < arr[mid]){
            end = mid-1
        }
    }

    return result
}

binSearch(([1,2,3,4,5,6], 5))
