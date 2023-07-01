{
    // !TODO
    const longestCommonPrefix = function(strs) {
        if(strs.length === 0) {
            return ""
        }
        let result = ""

        let first = strs[0]
        
        for(let i = 0; i < first.length; i++) {
            console.log(first[i])

            for(let j = 1; j < strs.length; j++) {
                console.log(strs[j][i])
                if(first[i] === strs[j][i] && !result.includes(first[i])) {
                    console.log(first[i])
                    result += first[i]
                } else {
                    console.log(strs[j][i])
                }
            }
        }

        console.log(result)
        // let result = strs[0][0]

        // for(let symb of strs) {
        //     if(symb.indexOf(result) === result.length - 1) {
        //         result += symb[result.length]
        //         continue
        //     }
            
        //     break
        // }

        // console.log(result)

    };

    console.log(longestCommonPrefix(["flower","flow","flight"]))
}