{
    const minOperations = function(s) {
        const result = {
            0: 0,
            1: 0,
        }

        for(let i = 0; i < s.length; i++) {
            if(i % 2) {
                if(s[i] !== '0') result[0] += 1
                if(s[i] !== '1') result[1] += 1
            } else {
                if(s[i] !== '1') result[0] += 1
                if(s[i] !== '0') result[1] += 1
            }
        }

        return Math.min(result[0], result[1])
    };

    console.log(minOperations('0100'))
}