{
    function tribonacci(n: number): number {
        if (n < 1) 
            return 0;
        if (n < 3) 
            return 1;
        
        return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n-1);
    };
    
}