{
    function numEquivDominoPairs(dominoes: number[][]): number {
        const map = new Map();
        
        let c = 0;

        for (const [first, second] of dominoes) {
            const key = first > second ? `${first}${second}` : `${second}${first}`;
        
            const current = map.get(key) || 0;
        
            c += current;
        
            map.set(key, current + 1);
        }

        return c;
    };

    console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]))
}