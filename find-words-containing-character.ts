{
    const findWordsContaining = function(words, x) {
        const result: number[] = [];

        for(let i = 0; i < words.length; i++) {
            if (words[i].includes(x))
                result.push(i)
        }
        
        return result
    };

    console.log(findWordsContaining(["leet","code"], 'e'))   
}
