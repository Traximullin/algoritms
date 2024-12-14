{
    function maxCoins(piles: number[]): number {
        piles.sort((a,b) => b - a);
        let c = 0;

        for (let i = 1; i < piles.length / 3 * 2; i += 2) {
            c += piles[i];
        }

        return c;
    };

    console.log(maxCoins([2,4,1,2,7,8]))
    console.log(maxCoins([2,4,5]))
    console.log(maxCoins([9,8,7,6,5,1,2,3,4]))
}