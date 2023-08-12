{
    const repeatedCharacter = function(s) {
        const charSet = new Set()

        for(const char of s) {
            if(charSet.has(char)) 
                return char

            charSet.add(char)
        }
    };

    console.log(repeatedCharacter("abccbaacz"))
}