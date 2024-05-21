{
    const numberOfSpecialChars = function(word) {
        return new Set(word).size - new Set(word.toLowerCase()).size
    };   

    console.log(numberOfSpecialChars("aaAbcBC"))
}