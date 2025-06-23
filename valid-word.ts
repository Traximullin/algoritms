{
    const consonant = new Set('bcdfghjklmnpqrstvwxyz'.split(''))
    const nums = new Set('1234567890');

    const vowels = new Set("aeiou".split(""))

    function isValid(word: string): boolean {
        if (word.length < 3) 
            return false;

        word = word.toLowerCase();

        let isVowels = false;
        let isConsonant = false;

        for (const char of word.split("")) {
            if (!consonant.has(char) && !vowels.has(char) && !nums.has(char))
                return false;

            isVowels = isVowels || vowels.has(char);
            isConsonant = isConsonant || consonant.has(char);
        }

        return isVowels && isConsonant;
    };

    console.log(isValid("aya"))
}