function sequentialDigits(low: number, high: number): number[] {
    const result: number[] = [];
    const digits = "123456789";

    for (let length = 1; length <= 9; length++) {
        let start = 0
        let end: number = start + length
        for (; end <= 9; start++, end = start + length) {
            const current = +digits.substring(start, end)

            if (current >= low && current <= high) result.push(current);
        }
    }

    return result;
};
