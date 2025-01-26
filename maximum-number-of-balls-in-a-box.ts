{
    function helper(n: number): number {
        return n.toString().split('').reduce((prev, next) => prev + Number(next), 0);
    }
    
    function countBalls(lowLimit: number, highLimit: number): number {
        const r = {};
        let max = 0;

        for (let i = lowLimit; i <= highLimit; i++) {
            const index = helper(i);

           if (!r[index])
            r[index] = 0;

           r[index] += 1;

           if (r[index] > max) 
                max = r[index]
        }

        return max;
    }

    console.log(countBalls(8,16))
}