{
    // !TODO
    // https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150
    const wordPattern = function(pattern, s) {
        const map = new Map()

        for(const [index, word] of s.split(" ").entries()) {
            if(map.has(pattern[index])) {
                console.log('!')
                if(map.get(pattern[index]) !== word) {
                    return false
                }
                
            } else {
                map.set(pattern[index], word)
            }
        }

        return true
    };  

    console.log(wordPattern("abba", "dog dog dog dog"))
}