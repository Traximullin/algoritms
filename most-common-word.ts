{
    function mostCommonWord(paragraph: string, banned: string[]): string {
        const hash = new Map();

        const words = paragraph.toLowerCase().replace(/[^a-zа-я0-9]+/g, " ").split(" ").filter(Boolean);

        for (const word of words) {
            const new_value = (hash.get(word) || 0) + 1;
            
            hash.set(word, new_value);
        }

        const banned_set = new Set(banned);

        let r = "";
        let max = 0;

        hash.forEach((value, key) => {
            if (value > max && !banned_set.has(key)) {
                r = key;
                max = value;
            }
        })

        return r 
    };

    console.log(mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))
}