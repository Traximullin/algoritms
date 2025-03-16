{
    function answerQueries(nums: number[], queries: number[]): number[] {
        nums.sort((a, b) => a - b);
        
        const res: number[] = [];

        for (let query of queries) {
            let sum= 0, 
                num= 0;
            
            for (let i = 0; i < nums.length; i++) {
                const prefix = sum + nums[i];
                
                if (prefix > query)
                    break

                sum += nums[i]
                num++
            }

            res.push(num);
        }
            
        return res;   
    };
}