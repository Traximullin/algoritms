{
    const addDigits = function(num) {
        // if (num == 0) {
        //     return num;
        // }
    
        // return num % 9 == 0 ? 9 : num % 9;

        while(num >= 10) {
            num = Array.from(num.toString(),Number).reduce((a,b) => a + b, 0)
        }

        return num
    };

    console.log(addDigits(10))
}