{
    function checkZeroOnes(s: string): boolean {
        let zero, one,
        zero_max, one_max;

        zero = one = zero_max = one_max = 0;

        for (const char of s) {
            if (char === '1' ) {
                one++;
                zero = 0;
                one_max = Math.max(one, one_max)
            } else {
                zero++;
                one = 0;
                zero_max = Math.max(zero, zero_max)
            }
        }
    
    
        return one_max > zero_max;
    };

    console.log(checkZeroOnes("1101"))
}