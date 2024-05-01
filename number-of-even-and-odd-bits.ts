{
    function evenOddBit(n: number): number[] {
        let n_bytes = n.toString(2).split('').reverse();
        const res = [0, 0];

        for (let i = 0; i < n_bytes.length; i++) {

            if (n_bytes[i] === '1') {

                if (i % 2 === 0) 
                    res[0] += 1;
                else 
                    res[1] += 1;

            }

        }

        return res
    };

    console.log(evenOddBit(17))
}