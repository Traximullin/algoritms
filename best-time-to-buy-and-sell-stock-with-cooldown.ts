{
    function maxProfit(prices: number[]): number {
        let c = 0;
        let buy = -1;
        let isBuy = false;

        for (let i = 0; i < prices.length; i++) {
            if (isBuy) {
                isBuy = false;
                continue;
            }

            if (buy === -1 && prices[i + 1] < prices[i]) {
                continue;
            }

            if (buy !== -1 && buy < prices[i]) {
                console.log(prices[i])
                let j = i;
                let max = 0;
                const diff = prices[i] - buy;

                while (j < prices.length) {
                    max = Math.max(diff, prices[j] - buy);

                    j++;
                }

                if (max > diff) {
                    continue;
                }

                c += prices[i] - buy;
                isBuy = true;
                buy = -1;
                continue;
            }

            buy = prices[i];

        }

        return c
    };

    console.log(maxProfit([1,2,4]))
}