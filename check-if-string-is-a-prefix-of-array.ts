{
    function isPrefixString(s: string, words: string[]): boolean {
        for (const word of words) {
            if (s.length === 0)
                return true
    
            if (s.startsWith(word)) {
                s = s.replace(word, "")
            } else {
                return false
            }
        }
        return s.length === 0
    };

    console.log(isPrefixString("applebananacookie",["banana","apple","cookie"]))

}