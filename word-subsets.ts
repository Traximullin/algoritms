{
    function helper(str: string, words: string[]) {
        const arr = str.split('');
        let test = 0;

        for (const chars of words) {
            let c = 0;
            const indexes = [];

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === chars[c]) {
                    c += 1;
                    indexes.push(i);
                }
                if (c === chars.length) {
                    test += 1;
                    indexes.forEach(item => {
                        arr[item] = '#';
                    })
                    break;
                }
            }

        }

        return test === words.length;
    }


    function wordSubsets(words1: string[], words2: string[]): string[] {
        const r = [];

        for (const word of words1) {
            if(helper(word, words2)) {
                r.push(word)
            }
        }

        return r;
    };


    console.log(wordSubsets(["google"], ["lo", "eo"]))
}