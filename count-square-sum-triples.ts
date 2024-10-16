{
    function countTriples(n: number): number {
        let r = 0;

        for (let a = 1; a <= n; a++) {

            for (let b = a; b <= n; b++) {
            
                const sum = a * a + b * b;
            
                const c = Math.sqrt(sum);
            
                if (Number.isInteger(c) && c <= n) 
                    r += (a === b) ? 1 : 2;
            }
        }

        return r;
    };

    console.log(countTriples(10))
}