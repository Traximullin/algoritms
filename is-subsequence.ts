{
    const isSubsequence = function(s, t) {
        const cache = s;

        for(const char of t) {
            if(s.includes(char)) {
                s = s.replace(char, '')
            } else {
                t = t.replace(char, '')
            }
        }

        return cache === t
    };

    console.log(isSubsequence("ab", "baab"))
}