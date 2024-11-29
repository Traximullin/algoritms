function coinChange(coins: number[], amount: number): number {
    if (amount === 0)
        return 0;

    coins.sort((a,b) => a - b);
    let link = coins.length;
    let currrent_coin = 0;
    let c = 0;

    while (currrent_coin < amount) {
        if (link === -1)
            return -1;
        const candidate = currrent_coin + coins[link];

        if (candidate <= amount) {
            currrent_coin += coins[link];
            c += 1;
        } else {
            link -= 1;
        }

    }

    return currrent_coin === amount ? c : -1;
};

// console.log(coinChange([1,2,5], 11))
console.log(coinChange([2], 3))