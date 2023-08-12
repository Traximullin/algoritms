{
    const numOfStrings = function(patterns, word) {
       return patterns.filter(pattern => word.includes(pattern)).length
    };

    console.log(numOfStrings(["a","abc","bc","d"], "abc"))
}