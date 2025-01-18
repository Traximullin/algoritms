{
    function zeroFilledSubarray(nums: number[]): number {
        let r = 0,
            c = 0;
    
        for (const num of nums) {
            if (num == 0)
                c += 1;
            else 
                c = 0;

            r += c;
        }

        return r;
    };

    console.log(zeroFilledSubarray([0,0,0,2,0,0]))
}