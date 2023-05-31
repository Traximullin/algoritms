{
    const plusOne = function(digits) {
        for(let i = digits.length - 1; i >= 0; i--) {
            const new_value = digits[i] + 1

            if(i === 0 && new_value >= 10) {
                digits[i] = new_value - 10
                digits.unshift(1)
                break
            }

            if(new_value >= 10) {
                digits[i] = new_value - 10
                continue
            } 
            
            digits[i] = new_value
            break
        } 
        return digits
    };
    console.log(plusOne([9]))
}