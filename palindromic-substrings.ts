{
    function isPalindrom(s: string) {
        let start = -1,
            end = s.length;
        
        while (++start < end--) {
            if (s[start] != s[end]) return false;
        }

        return true;
    }


    function countSubstrings(s: string): number {
        
        return s.length
    };

    console.log(countSubstrings("abc"))
}