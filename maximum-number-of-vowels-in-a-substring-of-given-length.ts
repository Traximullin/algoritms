{
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    function maxVowels(s: string, k: number): number {
        let c = 0;
        let max = 0;

        for (let i = 0; i < k; i++) {
            if (vowels.has(s[i])) {
                c++;
            }
        }

        max = c;

        for (let i = k; i < s.length; i++) {
            if (vowels.has(s[i])) 
                c++;
            if (vowels.has(s[i - k]))
                c--;

            max = Math.max(max,c);
        }

        return max;
    };

    console.log(maxVowels('leetcodes', 3))

}