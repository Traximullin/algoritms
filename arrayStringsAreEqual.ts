{
    const arrayStringsAreEqual = function(word1, word2) {
        const firstString = word1.reduce((acc, el)=>{
            acc+=el
            return acc
        },'')
        
        const secondString = word2.reduce((acc, el)=>{
            acc+=el
            return acc
        },'')

        return firstString === secondString
    };

    console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))
}