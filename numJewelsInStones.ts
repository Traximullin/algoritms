{
    const numJewelsInStones = function(jewels, stones) {
        let count = 0

        for(let sym of stones) {
            if(jewels.includes(sym)) {
                count++
            }
        }

        return count
    };

    console.log(numJewelsInStones("aA", "aAAbbbb"))
}