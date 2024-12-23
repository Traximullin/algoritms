{
    function countVowelSubstrings(word: string): number {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

        let c = 0;

        for (let i = 0; i < word.length; i++) {
            if (!vowels.has(word[i]))
                continue;

            const set = new Set(word[i]);

            for (let j = i + 1; j < word.length; j++) {

                if (!vowels.has(word[j]))
                    break;
                else
                    set.add(word[j])

                if (set.size === 5)
                    c += 1;
            }
        }

        return c;
    };

    console.log(countVowelSubstrings('cuaieuouac'))
}