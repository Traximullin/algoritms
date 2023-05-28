{
    const MIN = -2147483648
    const MAX = 2147483647

    const reverse = function(x) {
        const reversed = parseFloat(
            x
                .toString()
                .split("")
                .reverse()
                .join("")
        ) * Math.sign(x)
        
        if(reversed < MIN || reversed > MAX){
            return 0
        }
    
        return reversed
    };

    console.log(reverse(-123))
}