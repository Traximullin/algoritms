{
    const hammingDistance = function(x, y) {
        let k = 0;
        
        for (let xor = x ^ y; xor; xor >>= 1)
            k += xor & 1

        return k
    };

    console.log(hammingDistance(1,4))
}