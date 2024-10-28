{
    function getSum(a: number, b: number): number {
        while (b !== 0) {
            const c = a & b;
            a = a ^ b;
            b = c << 1;
        }

        return a;
    };

    console.log(getSum(2,3))

}