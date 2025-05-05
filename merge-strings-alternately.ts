{
    function mergeAlternately(word1: string, word2: string): string {
        let r = "";

        let i = 0;

        while (i < word1.length || i < word2.length) {
            r += word1[i] || '';
            r += word2[i] || '';

            i += 1;
        }

        return r;
    };

    console.log(mergeAlternately("ab", "pqrs"))
}