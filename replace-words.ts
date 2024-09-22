{
    function replaceWords(dictionary: string[], sentence: string): string {
        const set = new Set(dictionary);
        const words = sentence.split(" ");

        const result: string[] = [];

        main: for (const word of words) {
            for (let i = 0; i < word.length; i++) {
                const prefix = word.slice(0, i);

                if (set.has(prefix)) {
                    result.push(prefix);
                    continue main;
                } 
            }

            result.push(word)

        }

        return result.join(" ")
    };

    console.log(replaceWords(["cat","bat","rat"],  "the cattle was rattled by the battery"))

}