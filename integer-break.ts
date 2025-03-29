{
    function integerBreak(n: number): number {
        if (n < 4) 
            return n - 1;

        const diff = n % 3;
        const a = diff === 1 ? 4 : diff;
        
        return Math.pow(3, ((n - a) / 3)) * (a || 1)
    }

}