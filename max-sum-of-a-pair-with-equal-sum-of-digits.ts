{
    function helper(num: number) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;    
    }

    function maximumSum(nums: number[]): number {
        let max = -1;
        const map: Record<number, number[]> = {};

        for (const num of nums) {
            const digitSum = helper(num);

            if (!map[digitSum]) {
                map[digitSum] = [num];
            } else {
                map[digitSum].push(num);
                if (map[digitSum].length > 2) {
                    map[digitSum].sort((a, b) => b - a);
                    map[digitSum] = map[digitSum].slice(0, 2);
                }
            }
        }

        for (const values of Object.values(map)) {
            if (values.length === 2) {
                const sum = values[0] + values[1];
                max = Math.max(max, sum);
            }
        }

        return max;
    }
}