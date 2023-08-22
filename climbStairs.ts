{
    const climbStairs = function(n) {
        if (n < 2) 
            return 1

        let prev = 1,
            current = 2
        
        for(let i = 2; i < n; i++) {
            let temp = current

            current += prev
            prev = temp
        }

        return current
    };

    console.log(climbStairs(3))
}