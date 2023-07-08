{
    /*
        !TODO
        https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150
    */
    const obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    const isValid = function(s) {
        if(s.length % 2 !== 0) {
            return false
        }

        let stack = s[0]
        for(let i = 0; i < s.length; i++) {
            const findItem = obj[stack]
            console.log(findItem)
        }

        return true
    };

    console.log(isValid("()[]{}"))
}