{
    function maxCount(m: number, n: number, ops: number[][]): number {
        if(ops.length == 0) return m*n;

        let minM = m;
        let minN = n;
        for(let op of ops) {
            minM = Math.min(op[0], minM);
            minN = Math.min(op[1], minN);
        }
        return minM * minN;

    };
}