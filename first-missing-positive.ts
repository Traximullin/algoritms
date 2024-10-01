{
    function firstMissingPositive(nums: number[]): number {
        const length = nums.length + 1;

        const set = new Set(nums);

        let i = 1;

        while (i < length) {

            if (!set.has(i))
                return i;

            i++; 
        }

        return length;
    };

    console.log(firstMissingPositive([1]))
}