{
    const kidsWithCandies = function(candies, extraCandies) {
        const result: boolean[] = []
        const max = Math.max(...candies)

        for(let candy of candies) {
            const currentCandy = candy + extraCandies

            result.push(currentCandy >= max)
        }

        return result
    };

    console.log(kidsWithCandies([2,3,5,1,3], 3))
}