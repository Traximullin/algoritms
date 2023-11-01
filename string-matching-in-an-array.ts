{
    const stringMatching = function(words) {
        return words.filter(w => words.some(s => s !== w && s.includes(w)));
    };   

    console.log(stringMatching(["mass","as","hero","superhero"]))
}