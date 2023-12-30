{
    const makeEqual = function(words) {
        const chars = new Map();

        for(const word of words) {
            for(const char of word) {
                const value = (chars.get(char) || 0) + 1;

                chars.set(char, value)
            }
        }
        return [...chars.values()].every(count => count % words.length === 0)
    };

    console.log(makeEqual(["ab","a"]))
}