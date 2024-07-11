{
    function maxNumberOfBalloons(text: string, find_word = 'ballon'): number {
        if (text.length < find_word.length) {
            return 0
        }
        
        const map = new Map();
        const set = new Set(find_word)

        for (const char of text) {
            const value = map.get(char) || 0
            
            if (set.has(char)) {
                
                if (char === 'l' || char === 'o')
                    map.set(char, value + 0.5)
                else 
                    map.set(char, value + 1)
            
            }

            
        }

        const min = Math.min(...map.values())

        return ~~min
    };
    
    console.log(maxNumberOfBalloons("loonbalxballpoon"))
    console.log(maxNumberOfBalloons("nlaebolko"))
    console.log(maxNumberOfBalloons("leetcode"))
    console.log(maxNumberOfBalloons('balon'))
}