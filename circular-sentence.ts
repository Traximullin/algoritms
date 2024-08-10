{
    function isCircularSentence(sentence: string): boolean {
        if (sentence[0] !== sentence.at(-1))
            return false;
        
        const words = sentence.split(' ');

        for (let i = 0; i < words.length - 1; i++) {
            if (words[i].at(-1) !== words[i + 1][0])
                return false
        }

        return true
    };

    console.log(isCircularSentence("leetcode exercises sound delightful"))
    console.log(isCircularSentence("eetcode"))
    console.log(isCircularSentence("Leetcode is cool"))
    console.log(isCircularSentence("Leetcode eisc cool"))
}   