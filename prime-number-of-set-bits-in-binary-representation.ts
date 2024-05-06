{
    function bytes_counter (num: number) {
        let c = 0;

        while (num > 0) {
            c += num & 1;
            num >>= 1;
        }
        
        return c;
    }

    function countPrimeSetBits(left: number, right: number): number {
        const prime_number = new Set([2, 3, 5, 7, 11, 13, 17, 19])
        let c = 0;
        
        while (left !== right + 1) {
            const bytes_count = bytes_counter(left)

            if (prime_number.has(bytes_count)) {
                c += 1;
            }

            left += 1;
        }

        return c
    };

    console.log(countPrimeSetBits(6, 10))
}