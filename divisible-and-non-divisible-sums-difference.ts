{
    const differenceOfSums = function(n, m) {
        const x = Math.floor(n / m), 
        z = x * (x + 1) / 2     

        return ((n * (n + 1) / 2) - z * m) - (z * m)
    };
}