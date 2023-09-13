{
    const isAcronym = function(words, s) {
        return words.length === s.length && words.every((v, i) => v[0] === s[i]);
    };
}