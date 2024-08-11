{
    const MEMO: number[] = [0, 1, 1];

    function tribonacci(n: number): number {
        if (n < 0) 
            return 0;

        if (MEMO[n] == null) {
            let val = tribonacci(n-3);
            
            val += tribonacci(n-2);
            
            MEMO[n] = val + tribonacci(n-1);
        }

        return MEMO[n];
    };
    
}