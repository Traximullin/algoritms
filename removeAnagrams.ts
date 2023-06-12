{
    const removeAnagrams = function(words) {
        const map = new Map()

        for(let word of words) {
            const sorted = word.toLowerCase().split("").sort().join("")
            if(!map.has(sorted)) {
                map.set(sorted, word)
            }
        }

        return Array.from(map.values())
    }

    console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))
}