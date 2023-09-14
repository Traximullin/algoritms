{
    const checkIfPangram = function(sentence) {
        return sentence.length > 25 && ((new Set(sentence)).size) == 26
    };

    console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
}