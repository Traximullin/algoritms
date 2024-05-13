{
    function findPermutationDifference(s: string, t: string): number {
        const hash = new Map();
        let c = 0;

        for(let i = 0; i < s.length; i++) {
            hash.set(s[i], i)
        }

        for (let i = 0; i < t.length; i++) {
            c += Math.abs(hash.get(t[i]) - i)
        }

        return c;
    };

    console.log(findPermutationDifference("abc", "bac"))
}