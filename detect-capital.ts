{
    function detectCapitalUse(word: string): boolean {
        const word_lower_case = word.toLowerCase();

        if (word === word.toUpperCase() || word === word_lower_case)
            return true

        if (word === word.charAt(0).toUpperCase() + word_lower_case.slice(1)) {
            return true
        }

        return false
    };



    console.log(detectCapitalUse("USA"))
    console.log(detectCapitalUse("FlaG"))
}