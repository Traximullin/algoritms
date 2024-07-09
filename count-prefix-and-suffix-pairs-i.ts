{
    function countPrefixSuffixPairs(words: string[]): number {
        let c = 0;

        for (let i = 0; i < words.length - 1; i++) {
            const first_word = words[i];

            for (let j = i + 1; j < words.length; j++) {
                const second_word = words[j];

                if(second_word.startsWith(first_word) && second_word.endsWith(first_word))
                    c += 1;
            }
            
        }

        return c
    };  

    console.log(countPrefixSuffixPairs(["a","aba","ababa","aa"]))
}