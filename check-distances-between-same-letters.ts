{
    // refactor
    // https://leetcode.com/problems/check-distances-between-same-letters/
    function checkDistances(s: string, distance: number[]): boolean {
        const hash = new Map();
    
        for(let i = 0; i < s.length; i++) {
            const value = i - (hash.get(s[i]) || 0);
    
            hash.set(s[i], value )
        }
    
        for (let i = 0; i < s.length; i++) {
            const value = hash.get(s[i]) - 1
            const key = s[i].charCodeAt(0) - 97
    
            if(distance[key] !== value) {
                return false
            }
        }
    
        return true
    };

    console.log(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
}