{
    const isPowerOfFour = function(n) {
        if (n == 0) 
            return false;
        
        const x = Math.log(n) / Math.log(4);
    
        if (0 == x % 1) 
            return n == Math.pow(4, x);
        else 
            return false;
    };

    console.log(isPowerOfFour(16))
}