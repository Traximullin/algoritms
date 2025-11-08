{
    function findRepeatedDnaSequences(s: string): string[] {
        const maxsize = 10;
        const wordmap = new Map();
        const result = [];

        for (let i = 0; i <= s.length - maxsize; i++) {
            const word = s.slice(i, i + maxsize);
            wordmap.set(word, (wordmap.get(word) || 0) + 1);
        }

        wordmap.forEach((v, k) => {
            if (v >= 2) result.push(k);
        });

        return result;
    };
}