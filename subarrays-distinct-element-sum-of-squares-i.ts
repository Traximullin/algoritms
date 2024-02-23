{
    function sumCounts(nums: number[]): number {
        let result = 0;
        
        for (let i = 0; i < nums.length; i++) {
            const map = new Set([nums[i]]);
            console.log(map)
            for (let j = i; j < nums.length; j++) {
                map.add(nums[j]);

                result += (map.size ** 2);
            }

        }

        return result;
    };

    console.log(sumCounts([1,2,1]))
}