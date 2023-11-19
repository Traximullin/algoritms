{
    // const findRelativeRanks = function(score) {
    //     const sortedScore = [...score].sort((a, b) => b - a)

    //     const medals = {
    //         0: 'Gold Medal',
    //         1: 'Silver Medal',
    //         2: 'Bronze Medal',
    //     }

    //     const map = new Map();

    //     for(let i = 0; i < score.length; i++) {
    //         const position = sortedScore.findIndex((element) => element === score[i])

    //         if(position <= 2) {
    //             map.set(score[i], medals[position])
    //             continue
    //         }
            
    //         map.set(score[i], String(position + 1))
    //     }

    //     return score.map(s => map.get(s))
    // };

    const findRelativeRanks = function(score) {
        const sortedScore = score.slice().sort((a, b) => b - a)
        const map = new Map();

        for(let i = 0; i < sortedScore.length; i++) {
            map.set(sortedScore[i], i)
        }

        for(let i = 0; i < score.length; i++) {
            score[i] = `${map.get(score[i]) + 1}`

            if(score[i] == "1") 
                score[i] = "Gold Medal"

            if(score[i] == "2") 
                score[i] = "Silver Medal"

            if(score[i] == "3") 
                score[i] = "Bronze Medal"
        }

        return score;
    };

    console.log(findRelativeRanks([10,3,8,9,4]))
}