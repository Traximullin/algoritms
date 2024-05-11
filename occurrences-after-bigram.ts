{
    function findOcurrences(text: string, first: string, second: string): string[] {
        const result = [];
        
        const words = text.split(" ")

        for (let i = 2; i < words.length; i++) {
            const first_word = words[i - 2]
            const second_word = words[i - 1]

            if(first_word === first && second_word === second)
                    result.push(words[i])
        }

        return result
    };

    console.log(findOcurrences('alice is a good girl she is a good student', 'a', 'good'))
}