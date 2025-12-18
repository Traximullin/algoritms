function maxProfit(prices: number[], strategy: number[], k: number): number {
  let initProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    initProfit += prices[i] * strategy[i];
  }

  let maxProfit = initProfit;
  let curProfit = initProfit;
  let right = 0;

  for (let left = 0; left < prices.length - k + 1; left++) {
    while (right < left + k) {
      curProfit -= prices[right] * strategy[right];
      if (right >= left + k / 2) {
        curProfit += prices[right];
      }

      right++;
    }

    if (left > 0) {
      curProfit += prices[left - 1] * strategy[left - 1];
      curProfit -= prices[left + k / 2 - 1];
    }

    maxProfit = Math.max(maxProfit, curProfit);
  }

  return maxProfit;
}
