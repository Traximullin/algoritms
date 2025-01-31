{
    function minimumMoves(s: string): number {
        let c = 0;
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "O")
                continue;
        
            c++;
            i += 2;
        }
        
        return c;
    }
}