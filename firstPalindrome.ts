{

    const isPalindrome  = (word: string) => {
        let start  = 0,
            end  = word.length - 1

        while(start < end) {
            if(word[start] !== word[end]) {
                return false
            }

            start++
            end--
        }

        return true
    }

    const firstPalindrome = function(words) {
    
        for(let word of words) {
            if(isPalindrome(word)) {
                return word
            }
        }

        return ""
    };

    console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))
    console.log(isPalindrome("ada"))
}