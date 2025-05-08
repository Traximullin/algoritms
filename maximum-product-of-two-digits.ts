{
    function maxProduct(n: number): number {
        const x = n + ''
        let d0 = -Infinity;
        let d1 = -Infinity;
        
        for (let i = 0; i <= x.length; i++) {
            const v = parseInt(x[i]);
            if (v > d0) {
            d1 = d0;
            d0 = v;
            } else if (v > d1) {
            d1 = v;
            }
        }
        
        const p = d0 * d1;
            
        return p;
    };
}