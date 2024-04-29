{
    function isThree(n: number): boolean {
        let c = 0;

        for (let i = 1; i <= n; i++) {
            if(n % i === 0) 
                c++
            
            if(c > 3) 
                return false
        }

        return c === 3
    };

    console.log(isThree(4))
}