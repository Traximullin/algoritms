{
    function mostPoints(questions: number[][]): number {
        const n = questions.length;
        const dp = new Array(n + 1).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            const [ points, brain_power ] = questions[i];

            const new_quustion = i + brain_power + 1;
        
            const solve_points = points + (new_quustion < n ? dp[new_quustion] : 0)

            const skip = dp[i + 1];

            dp[i] = Math.max(solve_points, skip);
        }

        return dp[0];
    };

    console.log(mostPoints([[3,2],[4,3],[4,4],[2,5]]))
}