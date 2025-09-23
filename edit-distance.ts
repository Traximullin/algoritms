{
    function minDistance(word1: string, word2: string): number {
        let m = word1.length, n = word2.length;
        
        if(m < n) {
            [word1, word2] = [word2, word1];
            [m, n] = [n, m];
        }

        let prev = Array(n + 1).fill(0);
        let curr = Array(n + 1).fill(0);

        for(let j = 0; j <= n; j++) {
            prev[j] = j;
        }
        
        for(let i = 1; i <= m; i++) {
            curr[0] = i;
            for(let j = 1; j <= n; j++) {
                if(word1[i-1] === word2[j-1]) {
                    curr[j] = prev[j-1];
                } else {
                    curr[j] = 1 + Math.min(prev[j], curr[j-1], prev[j-1]);
                }
            }
            [prev, curr] = [curr, prev];
        }
        return prev[n];
    };
}