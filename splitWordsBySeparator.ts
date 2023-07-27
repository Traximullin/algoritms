{
    const splitWordsBySeparator = function(words, separator) {
        return words.join(separator).split(separator).filter(Boolean)
    };

    console.log(splitWordsBySeparator(["|||"],'|'))
}