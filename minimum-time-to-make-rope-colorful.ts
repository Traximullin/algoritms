{
    const minCost = function(colors, neededTime) {
        let total = 0,
            currentMax = 0
    
        for(let i = 0; i < colors.length; i++) {

            if(i > 0 && colors[i] != colors[i - 1]) {
                currentMax = 0
            }

            total += Math.min(currentMax, neededTime[i])
            currentMax = Math.max(currentMax, neededTime[i])
        }

        return total
    };

    console.log(minCost("aaabbbabbbb", [3,5,10,7,5,3,5,5,4,8,1]))
}