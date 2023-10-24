{
    const reverseBits = function(n) {
        let res = 0, 
            pow = 31;

        while (n > 0) {
            const rightMost = n & 1;
            res = res + (rightMost << pow);
            pow--;
            n = n >>> 1;
        }

        return res >>> 0;
    };
}