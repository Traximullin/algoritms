{
    // TODO DP
    function helper(word: string) {
        let left = 0,
            right = word.length - 1;

        while(left < right) {
            if (word.charAt(left) !== word.charAt(right))
                return false;

            left++;
            right--;
        }

        return true;
    }

    function longestPalindrome(s: string): string {

        for (let length = s.length; length > 0; length--) {

            for (let start = 0; start <= s.length - length; start++) {
                
                const candidate = s.substring(start, start + length);

                if (helper(candidate))
                    return candidate;

            }

        }

        return ""
    };

    console.log(longestPalindrome("cbbd"))
}