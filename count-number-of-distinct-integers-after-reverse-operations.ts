{
    const num_reverse = (num: number) => {
        let result = 0;

        while (num) {
            result = result * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
    
        return result;
    }

    function countDistinctIntegers(nums: number[]): number {
        const set = new Set(nums);

        for (const num of nums) {
            const new_value = num_reverse(num);

            set.add(new_value);
        }

        return set.size;
    };
    
    console.log(countDistinctIntegers([1,13,10,12,31]))
}