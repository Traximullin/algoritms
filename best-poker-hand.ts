{
    function bestHand(ranks: number[], suits: string[]): string {
        if (new Set(suits).size === 1)
            return "Flush";

        let max = 0;
        const map = new Map();

        for (const rank of ranks) {
            const new_value = (map.get(rank) || 0) + 1;

            max = Math.max(max, new_value);

            map.set(rank, new_value); 
        }


        if (max >= 3)
            return "Three of a Kind";

        if (max == 2) 
            return "Pair";

        return "High Card";
    };

    console.log(bestHand([13,2,3,1,9], ["a","a","a","a","a"]))

}