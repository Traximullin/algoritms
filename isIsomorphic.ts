{
    /*
        !TODO
        https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
    */
    const isIsomorphic = function(s, t) {
        t = t.split("").map(elem => t.indexOf(elem)).join("")
        s = s.split("").map(elem => s.indexOf(elem)).join("")
        console.log(t)
        console.log(s)
        return t === s
    };

    console.log(isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck"))
}