{
    function minCosts(cost: number[]): number[] {
        let ans = new Array(cost.length);
        
        for (let i = 0; i < ans.length; i++) 
            ans[i] = Math.min(i > 0 ? ans[i - 1] : Infinity, cost[i]);
    
        return ans;
    };
}