{
    const isPalindrome = function(s) {
        s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        
        let start = -1,
            end = s.length;
        
        while (++start < end--) {
            if (s[start] != s[end]) return false;
        }
        
        return true;
    };
    
    console.log(isPalindrome('A man, a plan, a canal: Panama'))
}