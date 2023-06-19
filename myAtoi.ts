{
    const myAtoi = function(s) {
        const result = Number.parseInt(s)

        if(result) {
            if(result <= -2147483648 ) 
                return -2147483648 ;
            else if (result >= 2147483647) 
                return 2147483647;
            else
                return result;
        } else {
            return 0
        }
    }

    console.log(myAtoi("-987"))
}