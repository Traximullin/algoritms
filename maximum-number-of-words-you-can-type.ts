{
    function canBeTypedWords(text: string, brokenLetters: string): number {
        const arr_words = text.split(" ");

        const result = arr_words.filter(word => {
            let c = 0;

            for(const char of brokenLetters) {
                if(word.includes(char))
                    c++
            }

            return c === 0
        }).length

        return result
    };

    console.log(canBeTypedWords('hello world', 'ad'))
}