function decrypt(code: number[], k: number): number[] {
    const result: number[] = [];
    const n = code.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        if (k > 0) 
            for (let j = 1; j <= k; j++) 
                sum += code[(i + j) % n];
        else 
            for (let j = 1; j <= -k; j++) 
                sum += code[(i - j + n) % n];

        result.push(sum);
    }

    return result;
}


const test = [1,2,3,4,5,6];

for (let i = 0; i > -2; i--) {
    console.log(test[i + test.length - 1])
}

// console.log(decrypt([5,7,1,4], 3))
console.log(decrypt([2,4,9,3], -2))