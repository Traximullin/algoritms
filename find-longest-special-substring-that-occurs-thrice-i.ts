{
    function helper(str: string) {
        const set = new Set(str);

        return set.size === 1;
    }
    
    function maximumLength(s: string): number {
        const set = new Set<string>();
        let start = 0;
        
        let max = -1;

        for (let i = 1; i <= s.length; i++) {
            const candidate = s.slice(start, i);

            if (helper(candidate)) {
                set.add(candidate);
            } else {
                start = i - 1;
                i -= 1;
            }
        }


        set.forEach(value => {
            let c = 0;

            for (let i = 0; i < s.length; i++) {
                const candidate = s.slice(i, i + value.length);

                if (candidate === value) {
                    c += 1;
                }

            }

            if (c >= 3) {
                max = Math.max(max, value.length);
            }

        })

        return max;
    };

    console.log(maximumLength('aaaa'))
}


