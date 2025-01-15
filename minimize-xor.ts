{
    function byteCounter(str: string): number {
        let c = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '1')
                c += 1;
        }

        return c;
    }

    function minimizeXor(num1: number, num2: number): number {
        const num_2_bytes = byteCounter(num2.toString(2));
        let num = num1;
        
        let min = Number.MAX_VALUE;

        let min_num = num1;

        while (num <= num2) {
            const current_bytes = byteCounter(num.toString(2));

            if (current_bytes === num_2_bytes) {
                const xor = num ^ num1;

                if (xor == 0)
                    return num;

                if (min > xor) {
                    
                    min = xor;
                    min_num = num;
                }
            }

            num += 1;
        }

        return min_num;
    };

    console.log(minimizeXor(3,5))
}