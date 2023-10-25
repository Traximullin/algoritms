{
    const isPowerOfTwo = function(n) {
        let count = 1

        for (let i = 0; i < 100; i++) {
            if(n == count) {
                return true
            }
            count *=  2
        }

        return false
    };

    console.log(isPowerOfTwo(16))
}