{
    const countConsistentStrings = function(allowed, words) {
        allowed = new Set(allowed);

        return words.reduce((count, word) => {
            return word.split('').every(l => allowed.has(l)) ? ++count : count;
        }, 0);
    };

    console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))
}