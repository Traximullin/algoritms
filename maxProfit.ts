{
    const maxProfit = function(prices) {
        let point = prices[0]
        let result = 0
        
        for(let i = 0; i < prices.length; i++) {
            if(point > prices[i]) {
                point = prices[i]
            }
            result = Math.max(prices[i] - point, result)
        }

        return result
    }

    console.log(maxProfit([1,2]))
}