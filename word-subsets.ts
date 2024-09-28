{
    // TODO https://leetcode.com/problems/word-subsets
    function wordSubsets(words1: string[], words2: string[]): string[] {
        const r: string[] = [];
        const chars = words2.join("").split("")

        main: for (let word of words1) {
            let replaced_word = word;
            for (const char of chars) {
                if (!replaced_word.includes(char)) {
                    continue main;
                } else {
                    replaced_word = replaced_word.replace(char, "")
                }
            }

            r.push(word)
        }

        return r;
    
    };


    console.log(wordSubsets(["leetcode"],["e","oo"]))
}