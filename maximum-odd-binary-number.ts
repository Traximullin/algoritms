{
    function maximumOddBinaryNumber(s: string): string {
        let c = 0;

        for(let i = 0; i < s.length; i++) {
            if (s[i] === '1') {
                c++
            }
        }

        return '1'.repeat(c - 1) + '0'.repeat(s.length - c) + '1'

    };

    console.log(maximumOddBinaryNumber('010'))
}