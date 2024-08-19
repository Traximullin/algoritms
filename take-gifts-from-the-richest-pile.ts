{
    function pickGifts(gifts: number[], k: number): number {
        while (k) {
            let max_index = 0;

            for (let i = 1; i < gifts.length; i++) 
                if (gifts[i] > gifts[max_index])
                    max_index = i;


            gifts[max_index] = ~~Math.sqrt(gifts[max_index]);
            k--;
        }

        return gifts.reduce((a, b) => a + b, 0);
    };

    console.log(pickGifts([25,64,9,4,100], 4))
}