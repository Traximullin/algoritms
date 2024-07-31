{
    function repeatedSubstringPattern(s: string): boolean {
        const double_s = s.repeat(2);

        return double_s.slice(1, double_s.length - 1).includes(s)
    };
    
    console.log(repeatedSubstringPattern('abab'))
}