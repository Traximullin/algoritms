{

    function helper(char: string) {
        return char.toLowerCase() !== char.toUpperCase();
    }

    function shortestCompletingWord(licensePlate: string, words: string[]): string {
        let r = '';
        words.sort((a,b) => a.length - b.length)

        let max_c = -1;

        let min = Number.MAX_VALUE;

        const map = new Map();

        for (let i = 0; i < licensePlate.length; i++) {
            if (helper(licensePlate[i])) {
                const char_lower_case = licensePlate[i].toLowerCase();

                const new_value = (map.get(char_lower_case) || 0) + 1;

                map.set(char_lower_case, new_value);
            }
        }

        for (const word of words) {
            let c = 0;

            const copy_map = new Map(map);
            
            for (const char of word) {
                const value = copy_map.get(char);
                
                if (value) {
                    copy_map.set(char, value - 1);
                    c++;
                }

            }

            if (min > word.length || max_c < c) {
                max_c = c;
                min = word.length;
                r = word;
            }
           
        }

        return r;
    };

    console.log(shortestCompletingWord("TE73696", ["ten","two","better","talk","suddenly","stand","protect","collection","about","southern"]))
    console.log(shortestCompletingWord('1s3 456', ["looks","pest"]))
}