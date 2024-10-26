{
    function findDifferentBinaryString(nums: string[]): string {
        let r = '';

        for (let i = 0; i < nums.length; i++) {
            r += nums[i][i] === '1' ? '0' : '1';        
        }


        return r;
    };

    console.log(findDifferentBinaryString(["00","01"]))
}