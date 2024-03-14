{
    function similarPairs(words: string[]): number {
        const hash = new Map();
        let c = 0;

        for(let word of words) {
            const sortedWord = [...new Set(word)].sort().join('');

            const value = (hash.get(sortedWord) || 0) + 1

            hash.set(sortedWord, value)
       
        }
        
        hash.forEach(value => {
            if(value > 1) 
                c += value * (value - 1) / 2
        })

        return c 
    };

    console.log(similarPairs(["aabb","ab","ba"]))
}