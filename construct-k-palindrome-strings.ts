{
    function canConstruct(s: string, k: number): boolean {
        if (s.length < k)
            return false;

        const chars = new Array(26).fill(0);

        for (const char of s)
            chars[char.charCodeAt(0) -  97] += 1;

        const odd_count = chars.filter(c => c % 2 == 1).length;

        return odd_count <= k;
    };
    
    console.log(canConstruct("annabelle", 2))
    
}