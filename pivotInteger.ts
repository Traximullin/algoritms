{
    const pivotInteger = function(n) {
        const value = Math.sqrt((n * n + n) / 2)

        if(~~value === value) {
            return value
        }

        return -1
    };

    console.log(pivotInteger(8))
}