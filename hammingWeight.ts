{
    const hammingWeight = function(n) {
        let count = 0;
        while (n !== 0) {
            let isOne = n & 1;
            if (isOne === 1) {
                count++
            }
            n = n >>> 1
        }
        return count;

        // return n.toString(2).split("0").join("").length
    };

    console.log(hammingWeight(00000000000000000000000000001011))
}