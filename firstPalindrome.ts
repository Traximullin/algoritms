{

    const helper = (word: string) => {
        return word.split("").reverse().join("")
    }

    const firstPalindrome = function(words) {
    
        for(let word of words) {
            if(word === helper(word)) {
                return word
            }
        }

        return ""
    };

    console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))
}