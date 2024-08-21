{
    function minStoneSum(piles: number[], k: number): number {
        while(k) {
            let max_index = 0;

            for (let i = 0; i < piles.length; i++) 
                if (piles[max_index] < piles[i]) 
                    max_index = i;

            piles[max_index] = Math.ceil(piles[max_index] / 2);

            k--;
        }

        return piles.reduce((prev, curr) => prev + curr, 0)
    };

    console.log(minStoneSum([4122,9928,3477,9942], 6))
    // console.log(minStoneSum([4,3,6,7],3))
}