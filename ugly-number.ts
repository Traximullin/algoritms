{
    const isUgly = function(n) {
        if(n === 1) 
            return true;
        if (n < 1) 
            return false;
    
        if(n % 2 === 0) 
            return isUgly(n/2);
        else if (n % 3 === 0) 
            return isUgly(n/3);
        else if (n % 5 === 0) 
            return isUgly(n/5);
        else 
            return false;
    };
    console.log(isUgly(6))
    console.log(isUgly(14))

}