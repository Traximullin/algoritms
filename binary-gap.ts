{
    function binaryGap(n: number): number {
        let result = 0;
        
        const nBinary = n.toString(2);

        let start = 0,
            end = 1;

        for (let i = 0; i < nBinary.length; i++) {
            if(nBinary[i] === '1') {
                result = Math.max(result, i - start)
                start = i;

                end = 0;
            } else {
                end += 1;
            }
        }

        return result
    };

    console.log(binaryGap(5))
}