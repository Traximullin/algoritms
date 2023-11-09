{
    const sumZero = function(n) {
        const mid = ~~(n / 2);
        const result: number[] = [];

        for(let i = 1; i <= mid; i++) {
            result.push(i, -i)
        }

        if(n % 2 == 1) 
            result.push(0)

        return result
    };

    console.log(sumZero(5))
}