{
    // const sortPrices = prices.sort((a,b)=>a-b)
    // const ans = money-sortPrices[0]-sortPrices[1]
    // return ans >= 0 ? ans : money
    const buyChoco = function(prices, money) {
        let sum = money;

        for(let i = 0; i < 2; i++) {
            const min = Math.min(...prices)

            if(sum >= min) {
                sum -= min;
                prices.splice(prices.indexOf(min), 1)
            } else {
                return money
            }
        }

        return sum 
    };
    console.log(buyChoco([3,2,3], 3))

}