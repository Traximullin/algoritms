{
    const isSubsequence = function(s, t) {
        let i = 0, j = 0

        while(i < s.length && j < t.length) {
            if(s[i] === t[j]) {
                i++
            }
            j++
        }

        return i === s.length

        // let result = ""
        // let count = 0

        // for(let i = 0; i < t.length; i++) {
        //     if(result.length === s.length) {
        //         break
        //     }

        //     if(s[count] === t[i]) {
        //         count++
        //         result += t[i]
        //     }
        // }
        // return s === result
    }

    console.log(isSubsequence("ab", "baab"))
}