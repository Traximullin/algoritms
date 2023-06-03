{
    const sortedWord = (str) => {
        return str.toLowerCase().split("").sort().join("")
    }

    const groupAnagrams = function(strs) {
        // const map = {}
 
        // for(const word of strs) {
        //     const sorted = sortedWord(word)
        //     if(!map[sorted]) map[sorted] = []
        //     map[sorted].push(word)
        // }

        // return Object.values(map)

        const map = new Map()
        for(const word of strs) {
            const sorted = sortedWord(word)
            if(map.has(sorted)) {
                map.get(sorted).push(word)
            } else {
                map.set(sorted, [word])
            }
        }

        return Array.from(map.values())
    }

    console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
}