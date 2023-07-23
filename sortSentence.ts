{
    const sortSentence = function(s) {
        const result: string[] = []

        for(const word of s.split(" ")) {
            result[word.at(-1) - 1] = word.slice(0,-1)
        }

        return result.join(" ")
    };

    console.log(sortSentence("is2 sentence4 This1 a3"))
}