{
    /*
        !TODO
        https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
    */
    const isIsomorphic = function(s, t) {
        if(s.length !== t.length) {
            return false
        }

        const cache = {}

        for(let i = 0; i < s.length; i++) {
            cache

            cache[t[i]] = s[i]
        }

        console.log(cache)

        for(let i = 0; i < t.length; i++) {
            if(cache[t[i]] !== s[i]) {
                return false
            }
        }
        return true
    };

    console.log(isIsomorphic("egg", "add"))
}