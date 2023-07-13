{
    // function validate(n) {
    //     n = Array.from(String(n), Number).reverse();
    //     return n.reduce((sum, digit, index) => {
    //       if (index & 1) digit <<= 1;
    //       if (digit > 9) digit -= 9;
    //       return sum + digit;
    //     }, 0) % 10 == 0;
    // }

    const helper = (num: number) => {
        const result = num * 2
        if(result > 9) {
            return Array.from(String(result), Number).reduce((prev,curr) => prev + curr,0)
        }

        return result
    }

    function validate(n){
        n = Array.from(String(n), Number)
            .reverse()
            .map(
                (item, index) => index % 2 ? helper(item) : item
            )
            .reduce((prev,curr) => prev + curr,0)

            return n % 10 === 0
    }

    console.log(validate(1230))
}