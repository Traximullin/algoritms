{
    function maxBottlesDrunk(numBottles: number, numExchange: number): number {
        let res = numBottles;
        
        let emptyBottles = numBottles;

        while (emptyBottles >= numExchange) {
            emptyBottles -= numExchange;
            res++;
            emptyBottles++;
            numExchange++;
        }
        
        return res;
    }
}