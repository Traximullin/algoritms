{
    const countDigits = function(num) {
        const digits = String(num).split("")
        let result = 0;

        for(const digit of digits) {
            if(!(num % +digit)) {
                result++
            }
        }

        return result 
    };

    console.log(countDigits(7))
}