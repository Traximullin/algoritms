{
    const finalPrices = function(prices) {
        const result = [];

        loop: for(let i = 0; i < prices.length; i++) {
            for(let j = i + 1; j < prices.length; j++) {
                if(prices[i] >= prices[j]) {
                    result.push(prices[i] - prices[j])
                    continue loop;
                }
            }

            result.push(prices[i])
        }

        return result
    };

    console.log(finalPrices([8,4,6,2,3]))
}