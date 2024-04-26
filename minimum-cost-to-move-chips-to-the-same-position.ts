{
    function minCostToMoveChips(position: number[]): number {
        let even = 0;
        let odd = 0;

        for (const pos of position) {
            if(pos % 2 === 0) 
                even += 1;
            else 
                odd += 1;
        }

        return Math.min(odd,even);
    };

    console.log(minCostToMoveChips([2,2,2,3,3]))
}