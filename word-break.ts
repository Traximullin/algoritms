{
    function wordBreak(s: string, wordDict: string[]): boolean {
        const set = new Set(wordDict);

        const dp = Array(s.length + 1).fill(false);
        dp[0] = true;

        for (let i = 1; i <= s.length; i++) {

            for (let j = 0; j < i; j++) {

                const candidate = s.slice(j, i);

                if (dp[j] && set.has(candidate)) {
                    dp[i] = true;
                    break;
                }

            }

        }

        return dp[s.length]
    };  


    console.log(wordBreak('aaaaaaa', ["aaaa","aaa"]))
}