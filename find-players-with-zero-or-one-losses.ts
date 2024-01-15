{
    const findWinners = function(matches) {
        let hashMap = {}

        for(const match of matches) {
            if(!hashMap[match[0]]) 
                hashMap[match[0]] = 0
            if(!hashMap[match[1]]) 
                hashMap[match[1]] = 0
    
            ++hashMap[match[1]]
        }

        let result: number[][] = [[], []]

        for(const [key, value] of Object.entries(hashMap)) {
            if(Number(value) < 2) {
                result[Number(value)].push(Number(key))
            }

        }

        return result
    };

    console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))
}