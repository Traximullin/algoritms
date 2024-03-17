{
    function sumOfEncryptedInt(nums: number[]): number {
        let c = 0; 

        for(let i = 0; i < nums.length; i++) {
            const max_num = Math.max(...[...nums[i].toString()].map(Number))
            const length = nums[i].toString().length;

            c += +max_num.toString().repeat(length)
        }

        return c
    };

    console.log(sumOfEncryptedInt([10,21,31]))
}