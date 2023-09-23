{
    const keyboardRows = [
        new Set("qwertyuiop" + "qwertyuiop".toUpperCase()),
        new Set("asdfghjkl" + "asdfghjkl".toUpperCase()),
        new Set("zxcvbnm" + "zxcvbnm".toUpperCase()),
    ];

    const findWords = function(words) {
        return words
            .filter(word => keyboardRows
                .some(map => 
                    [...word]
                        .every(char => map.has(char))
                )    
            )
    };

    console.log(findWords(["Hello","Alaska","Dad","Peace"]))
}