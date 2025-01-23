{
    function trailingZeroes(n: number): number {
        let c = 0;

        while (n > 0) {
            n = ~~(n / 5);
            c += n;
        }
    
        return c;
    };

    console.log(trailingZeroes(5))
}