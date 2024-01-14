{
    const closeStrings = function(word1, word2) {
        if(word1.length !== word2.length) {
            return false
        }

        const word1Chars = {}
        const word2Chars = {}
    
        for(let i = 0; i < word1.length; i++) {
            word1Chars[word1[i]] = word1Chars[word1[i]] ? word1Chars[word1[i]] + 1 : 1;
            word2Chars[word2[i]] = word2Chars[word2[i]] ? word2Chars[word2[i]] + 1 : 1;
        }

        const letters = Object.keys(word1Chars).sort().join("") === Object.keys(word2Chars).sort().join("")
        const values = Object.values(word1Chars).sort().join("") === Object.values(word2Chars).sort().join("");

        return letters && values
    };

    console.log(closeStrings("cabbba", "abbccc")) 
}