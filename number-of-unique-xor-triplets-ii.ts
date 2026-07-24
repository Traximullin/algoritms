function uniqueXorTriplets(nums: number[]): number {
    const m = Math.max(...nums);

    let size = 1;

    while (size <= m) {
        size <<= 1;
    }

    const one: boolean[] = Array(size).fill(false);
    const two: boolean[] = Array(size).fill(false);
    const three: boolean[] = Array(size).fill(false);

    for (const x of nums) {
        one[x] = true;

        for (let y = 0; y < size; y++) {
            if (one[y]) {
                two[y ^ x] = true;
            }
        }
    }

    for (const x of nums) {
        for (let y = 0; y < size; y++) {
            if (two[y]) {
                three[y ^ x] = true;
            }
        }
    }

    let result = 0;

    for (const value of three) {
        if (value) {
            result++;
        }
    }

    return result;
}
