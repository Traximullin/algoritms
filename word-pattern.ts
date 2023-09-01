{
    const wordPattern = function(pattern, s) {
        const map = new Map()
        const patternMap = new Map()

        const splitS = s.split(" ");

	    if (pattern.length !== splitS.length) return false;

        for (let i = 0; i < pattern.length; i++) {
            if (!patternMap.has(pattern[i])) patternMap.set(pattern[i], i);
            if (!map.has(splitS[i])) map.set(splitS[i], i);
        }

        for (let i = 0; i < pattern.length; i++) {
            if (map.get(splitS[i]) !== patternMap.get(pattern[i])) {
                return false;
            }
        }

        return true
    };  

    console.log(wordPattern("abba", "dog dog dog dog"))
}