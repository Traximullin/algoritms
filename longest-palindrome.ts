{
    const longestPalindrome = function(s) {
        const map = new Map()
        let count = 0

        for(let i = 0; i < s.length; i++) {
            if(map.has(s[i])) {
                count += 2;
                map.delete(s[i])
                continue
            }
            map.set(s[i], 1)
        }

        return s.length > count ? count + 1 : count
    };

    console.log(longestPalindrome("abccccdd"))

}