{
    const divide = function(dividend, divisor) {
        let result = 0
        while(Math.abs(dividend) >= Math.abs(divisor)) {
            console.log(Math.abs(dividend) >= divisor)
            dividend -= Math.abs(divisor)
            result++
        }

        if(divisor < 0 || dividend < 0) {
            return -result
        }

        return result
    };

    console.log(divide(-1,1))
}