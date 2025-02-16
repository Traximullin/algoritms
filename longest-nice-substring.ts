{
    function longestNiceSubstring(s: string): string {
        if (s.length < 2) 
            return "";
    
        const set = new Set(s);
        
        for (let i = 0; i < s.length; i++) {
            if (set.has(s[i].toUpperCase()) && set.has(s[i].toLowerCase())) 
                continue;
            
            const left = longestNiceSubstring(s.substring(0, i));
            const right = longestNiceSubstring(s.substring(i + 1));
    
            return left.length >= right.length ? left : right;
        }
    
        return s;
    }

    console.log(longestNiceSubstring("Bb"))
}