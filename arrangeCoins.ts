{
    /*
        !SEE https://leetcode.com/problems/arranging-coins/submissions/?envType=study-plan-v2&envId=binary-search

    */
    const arrangeCoins = function(n) {
        for(let i = 1; i <= n +  1; i++) {
            n = n - i
            if(n <= i) return i
        }
    };

    console.log(arrangeCoins(5))
}