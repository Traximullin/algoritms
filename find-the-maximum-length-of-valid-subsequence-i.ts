{
    function maximumLength(nums: number[]): number {
        let even=0, odd=0, both=0;
        let flag=nums[0]%2;

        for(let num of nums) {
            num % 2 == 0 ? even++ : odd++;

            if (num % 2 == flag) {
                both++;
                flag = 1 - flag;
            }
        }

        return Math.max(both,Math.max(even,odd));
    };


}