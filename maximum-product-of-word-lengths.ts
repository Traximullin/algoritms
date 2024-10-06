{
    const helper = (wrd1: string, wrd2: string) => {
        const set_wrd1 = new Set(wrd1);

        for (const char of wrd2) {
            if (set_wrd1.has(char)) {
                return false
            }
        }

        return true;
    }

    function maxProduct(words: string[]): number {
        words.sort((a,b) => b.length - a.length);

        let r = 0;

        main: for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if (helper(words[i], words[j])) {
                    r = Math.max(r, words[i].length * words[j].length);
                    
                    continue main;
                }
            }
        }

        return r;
    };

    console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]))
}