{
    function createPattern(str: string) {
        const hash = new Map();
        let pattern = '';

        for(let i = 0; i < str.length; i++) {
            const char = str[i];
            const key = hash.get(char)

            if(!key && key !== 0) {
                hash.set(char, i)
            }

            pattern += hash.get(char)
        }

        return pattern
    }

    function findAndReplacePattern(words: string[], pattern: string): string[] {
        const result = [];
        const currentPattern = createPattern(pattern);

        console.log(currentPattern)

        for(const word of words) {
            const wordPattern = createPattern(word);
            console.log(wordPattern)
            if(currentPattern === wordPattern)
                result.push(word)
        }

        return result;
    };

    console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], 'abb'))
}