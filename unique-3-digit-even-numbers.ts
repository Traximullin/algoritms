{
    function totalNumbers(digits: number[]): number {
        const s = new Set();

        for (let i = 0; i < digits.length; i++) {

            for (let j = 0; j < digits.length; j++) {

                for (let k = 0; k < digits.length; k++) {
                    
                    if (i !== j && i !== k && j !== k && digits[k] % 2 === 0) {
                        const n = digits[i] * 100 + digits[j] * 10 + digits[k];

                        if (n >= 100) 
                            s.add(n);

                    }

                }

            }
        }

        return s.size;
    };

    console.log(totalNumbers([1,2,3,4]))
}