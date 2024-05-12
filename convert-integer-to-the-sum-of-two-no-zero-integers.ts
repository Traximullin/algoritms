{
    function getNoZeroIntegers(n: number): number[] {
        for (let i = 1; i <= n; i++) {
            const second = n - i;
            const isNotZero = !i.toString().includes('0') && !second.toString().includes('0')
           
            if (isNotZero) {
                return [i, second]
            }
        }

        return [0, 0]
    };
    
    console.log(getNoZeroIntegers(11))
}