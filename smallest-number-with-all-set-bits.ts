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

console.log(smallestNumber(5))