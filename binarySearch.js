const arr = [1,2,3,4,5,6,7,8,9,10]
let count = 0

const binarySearch = (arr,target) => {
    let start = 0
    let end = arr.length
    let middle;
    let flag = false;
    let position = -1
    while ( flag === false && start <= end) {
        count+=1
        middle = Math.floor((start + end) / 2)
        if(arr[middle] === target) {
            flag = true
            position = middle
            return position
        }
        
        if(target < arr[middle]) {
            end = middle - 1
        }else {
            start = middle + 1
        }
    }
    return position
}

console.log(count)
console.log(binarySearch(arr,8))