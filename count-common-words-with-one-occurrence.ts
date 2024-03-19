{
    function countWords(words1: string[], words2: string[]): number {
        const hash = new Map();
        let c = 0;


        words1.forEach(word => {
            const new_value = (hash.get(word) || 0) + 1
            
            hash.set(word, new_value)
        })

        words2.forEach(word => {
            const new_value = (hash.get(`${word}-2`) || 0) + 1
            
            hash.set(`${word}-2`, new_value)
        })

        words2.forEach(word => {
            if(hash.get(word) === 1 && hash.get(`${word}-2`) === 1)
                c++
        })

        return c
    };

    console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]))
}