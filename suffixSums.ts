const suffixSums = (arr: number[]) => {
    const result: number[] = []

    for (const index in arr) {
        result.push(arr.slice(Number(index)).reduce((acc,current) => acc + current))
    }

    return result
}

// best

// function suffixSums(a) {
//     const b = [];
//     while(a.length) {
//       b.push(a.reduce((a, b) => a + b))
//       a.shift();
//     }
    
//     return b;
    
// }

