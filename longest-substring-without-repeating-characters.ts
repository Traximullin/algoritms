{
    function lengthOfLongestSubstring(s: string): number {
        const map = new Map();
    
        let i = 0;
        let max = 0;
        let last = 0;

        while (s.length != i) {
            const char = s[i];
            const value = map.get(char);

            if (map.has(char) && value >= last) {
                last = value + 1;
            }

            map.set(char, i);

            max = Math.max(max, i - last + 1);

            i++;
        }
    
        return max;
    };
    console.log(lengthOfLongestSubstring('dvdf'))
    // console.log(lengthOfLongestSubstring("abcabcbb"))
    // console.log(lengthOfLongestSubstring("pwwkew"))
}