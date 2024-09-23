{
    function minimumAbsDifference(arr: number[]): number[][] {
        const result: number[][] = [];

        arr.sort((a,b) => a - b);

        let min_diff = Number.MAX_VALUE;

        for (let i = 1; i < arr.length; i++) {
            const curr = arr[i - 1];
            const next = arr[i];

            const sum = next - curr;

            if (min_diff > sum) {
                min_diff = sum;
            }
        }

        for (let i = 1; i < arr.length; i++) {
            const curr = arr[i - 1];
            const next = arr[i];

            if (next - curr == min_diff) {
                result.push([curr,next])
            }
        }

        return result;
    };
}