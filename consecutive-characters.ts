{
    function maxPower(s: string): number {
        let max = 1;
        let c = 1;

        for (let i = 1; i < s.length; i++) {
            if(s[i] === s[i - 1]) {
                c++ 
            } else {
                max = Math.max(c, max)
                
                c = 1;
            }
        }

        return Math.max(max,c)
    };

    console.log(maxPower('leetcode'))
    console.log(maxPower('abbcccddddeeeeedcba'))
}