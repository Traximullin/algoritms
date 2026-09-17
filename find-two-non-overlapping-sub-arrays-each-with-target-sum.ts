function minSumOfLengths(arr: number[], target: number): number {
    const n = arr.length;

    const best: number[] = new Array(n).fill(Infinity);

    let left = 0;
    let sum = 0;
    let answer = Infinity;

    for (let right = 0; right < n; right++) {
        sum += arr[right];

        while (sum > target) {
            sum -= arr[left];
            left++;
        }

        if (sum === target) {
            const currentLength = right - left + 1;

            if (left > 0 && best[left - 1] !== Infinity) {
                answer = Math.min(
                    answer,
                    currentLength + best[left - 1]
                );
            }

            best[right] = currentLength;
        }

        if (right > 0) {
            best[right] = Math.min(best[right], best[right - 1]);
        }
    }

    return answer === Infinity ? -1 : answer;
}
