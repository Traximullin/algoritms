{
    const xorOperation = function(n, start) {
        return Array(n).fill(0).reduce((res, _, i) => (start + 2 * i) ^ res, 0)
    };

    console.log(xorOperation(5,0))
}