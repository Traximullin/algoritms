{
    function maximumLengthSubstring(s: string): number {
        let max = 0;
        const map = new Map();
        let c = 1;

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            map.set(char , 1);

            for (let j = i + 1; j < s.length; j++) {
                const next_char = s[j];

                const new_value = (map.get(next_char) || 0) + 1;

                if (new_value === 3)
                    break;

                map.set(next_char, new_value);
                c += 1;

            }

            map.clear();
            max = Math.max(c, max);
            c = 1;
        }


        return max;
    };
    console.log('!')
    console.log(maximumLengthSubstring("бцбббцба"));
}