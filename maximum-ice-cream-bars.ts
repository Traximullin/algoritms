{
    function maxIceCream(costs: number[], coins: number): number {
        let c = 0;

        costs.sort((a,b) => a - b)
        
        for (const cost of costs) {
            coins -= cost

            if (coins < 0) 
                return c

            c++
        }
        
        return c
    };

    console.log(maxIceCream([1,3,2,4,1], 7))
}