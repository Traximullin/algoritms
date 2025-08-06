{
    function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
        let unplaced = fruits.length;
        for (const fruit of fruits) {
            const foundIndex = baskets.findIndex(b => b >= fruit);
            if (foundIndex > -1) {
                baskets[foundIndex] = -1;
                unplaced--;
            }
        }

        return unplaced;
    };
}