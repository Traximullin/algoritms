{
    function maxOperations(s: string): number {
        let res = 0, count = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '1') {
                count++;
            } else {
                if (i > 0 && s[i - 1] === '1') res += count;
            }
        }

        return res;
    };
}