{
    function maxScoreWords(words: string[], letters: string[], score: number[]): number {
        const letters_map  = new Map();

        for (const char of letters) {
            const new_value = (letters_map.get(char) || 0) + 1;

            letters_map.set(char,new_value);
        }

        console.log(letters_map)
    };

    maxScoreWords(
        ["dog","cat","dad","good"],
        ["a","a","c","d","d","d","g","o","o"], 
        [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
    )

}