{
    function maxProfit(prices: number[]): number {
        let c = 0;

        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < prices[i + 1]) {
                c += prices[i + 1] - prices[i]
            }
        }

        return c;
    };

    console.log(maxProfit([7,1,5,3,6,4]))
}