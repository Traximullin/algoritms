{
    const generateTheString = function(n) {
        if(n % 2 !== 0) {
            return 'a'.repeat(n)
        }

        return 'a'.repeat(n - 1) + 'b'.repeat(1)
    };

    // console.log(generateTheString(7))
    console.log(generateTheString(4))
}