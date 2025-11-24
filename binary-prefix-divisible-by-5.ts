{
    function prefixesDivBy5(nums: number[]): boolean[] {
        const res: boolean[] = [];
        let rem = 0;

        for (const bit of nums) {
            rem = ((rem << 1) + (bit & 1)) % 5;
            res.push(rem === 0);
        }
        
        return res;
    }
}