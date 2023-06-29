{
    /*
        !TODO
        https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150
    */

    const isSubsequence = function(s, t) {
        let currentSymb = 0

        while(currentSymb < s.length) {
            if(!t.includes(s[currentSymb])) {
                return false
            }
            currentSymb++
        }

        return true
    }

    console.log(isSubsequence("abc", "ahbgdc"))
}