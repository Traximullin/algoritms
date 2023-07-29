{
    const reversePrefix = function(word, ch) {
        const prefix = word.indexOf(ch)

        const reversePrefix = word.slice(0, prefix + 1).split("").reverse().join("")

        return reversePrefix + word.substr(prefix + 1,word.length)
    };

    console.log(reversePrefix("abcdefd", "y"))
}