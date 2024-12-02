function helper(num: number) {
    return num.toString(2).indexOf('0');
}

function smallestNumber(n: number): number {
    while(true) {
        if (helper(n) === -1) {
            return n
        }
        n += 1;
    }
};


const test = [1,2,3,4,5,6,7,8,9,10];

function wes(arr: number[], search: number) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = ~~((right + left) / 2);
        
        const candidate = arr[mid];

        if (candidate === search)
            return mid

        if (candidate < search)
            left = mid + 1;
        else 
            right = mid - 1;
    }

    return -1;
}

console.log(wes(test , 4))