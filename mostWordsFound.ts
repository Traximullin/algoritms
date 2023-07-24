{
    const mostWordsFound = function(sentences) {
        let max = 0
        
        for(let i = 0; i < sentences.length; i++) {
            const sentence_length = sentences[i].split(" ").length

            max = Math.max(max, sentence_length)
        }

        return max
    };

    console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
}