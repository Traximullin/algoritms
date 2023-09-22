{
    const removeTrailingZeros = function(num) {
        let result = ""

        for (let i = num.length - 1; i >= 0; i--) {
          if (num[i] !== "0" || result.length > 0) {
            result = num[i] + result
          }
        }
        
        return result
    };

    console.log(removeTrailingZeros("123"))
}