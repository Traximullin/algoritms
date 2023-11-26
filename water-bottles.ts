{
    const numWaterBottles = function(numBottles, numExchange) {
        let drink = numBottles;
    
        while (numBottles >= numExchange) {
            const fullWater = ~~(numBottles / numExchange);
    
            drink += fullWater;
            numBottles = fullWater + (numBottles % numExchange);
        }
        return drink;
    };

    console.log(numWaterBottles(9,3))
}