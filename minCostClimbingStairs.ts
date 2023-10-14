{
    const minCostClimbingStairs = function(cost) {
        const dp: number[] = [0, 0]

        for (let i = 2; i <= cost.length; i++) {
            dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
        }

        return dp[dp.length - 1];
    };

    console.log(minCostClimbingStairs([10,15,20]))
}