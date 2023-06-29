{
    /*
        !TODO
        https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150
    */

    const isSubsequence = function(s, t) {
        let result = ""
        let currentSymb = 0

        for(let symb of t) {
            if(result.length === s.length) {
                break
            }
            if(s.includes(symb)) {
                result += symb
                
                if(result[currentSymb] !== s[currentSymb]) {
                    result = ""
                }

                currentSymb++

            }
        }
        return result === s
        // let currentSymb = 0

        // while(currentSymb < s.length) {
        //     if(!t.includes(s[currentSymb])) {
        //         return false
        //     }
        //     currentSymb++
        // }

        // return true
    }

    console.log(isSubsequence("ab", "baab"))
}