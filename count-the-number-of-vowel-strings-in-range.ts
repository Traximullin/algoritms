{
    
    function vowelStrings(words: string[], left: number, right: number): number {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
        let c = 0;

        while(left <= right) {
            const word = words[left]

            if (vowels.has(word[0]) && vowels.has(word.slice(-1))) {
                c++
            }

            left++;
        }
        

        return c
    };

    console.log(vowelStrings(["are","amy","u"], 0,2))
}