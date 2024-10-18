{
    const isUgly = function(n) {
        if(n <= 0) return false
    
        while (n != 1) {
            if (n % 2 === 0) {
                n /= 2
            } else if (n % 3 === 0) {
                n /= 3
            } else if (n % 5 === 0) {
                n /= 5
            } else {
                return false
            }
        }
    
        return true
    };
    
function nthUglyNumber(n: number): number {
    let c = 0;

    let i = 1;
    let last = -1;

    while(c < n) {
        if (isUgly(i)) {
            c +=1;
            last = i;
        }

        i++;
    }

    return last;
};

}