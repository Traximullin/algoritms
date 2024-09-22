{
    function maximumLengthSubstring(s: string): number {
        const hash = new Map();
        let k = 0;
        let j = 0;

        for (let i = 0; i < s.length; i++) {
            const value = (hash.get(s[i]) || 0) + 1

            if (value === 3) {
                hash.clear();
                i -= 1;
                j = k;
            } else {
                hash.set(s[i], value);
                k++;
            }

        }

        return k - j;
    };

    console.log(maximumLengthSubstring("bcbbbcba"));
}