{
    function minimumCost(cost: number[]): number {
        let c: number = 0;
        
        cost.sort((a, b) => b - a);

        for (let i: number = 0; i < cost.length; i++) {
            if (i % 3 < 2) {
                c += cost[i];
            }
        }
        
        return c;
    };
}