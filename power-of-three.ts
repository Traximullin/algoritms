{
    function isPowerOfThree(n: number): boolean {
        if (n === 1 || n === 3) 
            return true

        if (n < 3) 
            return false

        return isPowerOfThree(n / 3)
    };
}