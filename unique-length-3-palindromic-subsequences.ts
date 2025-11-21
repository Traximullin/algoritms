{
    function countPalindromicSubsequence(s: string): number {
        let result = 0;

        for (let c = 0; c < 26; c++) {
            let ch = String.fromCharCode(97 + c);
            let first = s.indexOf(ch);
            let last = s.lastIndexOf(ch);

            if (first !== -1 && last !== -1 && last - first > 1) {
                let middle = new Set();

                for (let i = first + 1; i < last; i++) {
                    middle.add(s[i]);
                }
                result += middle.size;
            }
        }

        return result;

    };
}