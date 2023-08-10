{
    const subtractProductAndSum = function(n) {
        let sum = 0,
            prod = 1

        while(n > 0) {
            const digit = n % 10
            prod *= digit
            sum += digit
            n = ~~(n / 10)
        }

        return prod - sum
    };

    console.log(subtractProductAndSum(234))
}