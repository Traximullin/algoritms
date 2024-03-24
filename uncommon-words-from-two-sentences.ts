{
    function uncommonFromSentences(s1: string, s2: string): string[] {
        const result: string[] = [];
        const hash = new Map();
        
        const all_words = (s1 +  ' ' + s2).split(' ')

        for(const word of all_words) {
            const new_value = (hash.get(word) || 0) + 1;

            hash.set(word, new_value)
        }


        for(let [key, value] of hash.entries()) {
            if(value === 1)
                result.push(key)
        }


        return result
    };

    console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))
}