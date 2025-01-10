{
    function wordSubsets(words1: string[], words2: string[]): string[] {
        const r: string[] = [];
        
        for (const words of words1) {
            let i = 0;

            for (const char of words) {
                if (i === words2.length)
                    break;

                if (char == words2[i]) 
                    i += 1;
            }

            if (i === words2.length) 
                r.push(words);
        }

        return r;
    };


    console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"],["l","e"]))
}