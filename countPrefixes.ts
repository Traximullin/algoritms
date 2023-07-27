{
    const countPrefixes = function(words, s) {
        return words.filter(word => s.indexOf(word) === 0).length
    };

    console.log(countPrefixes(["e","s","mi","e","ia","ibwu","e","e","k","ci","rip","suw","a","l"], "e"))
}