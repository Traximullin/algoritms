{

    function helper(word: string, hash: Map<string, number>) {
        let c = 0;

        for (const char of word) {
            if (hash.get(char)) {
                c+= 1;
            }
        }

        return c
    }

    function shortestCompletingWord(licensePlate: string, words: string[]): string {
        const word_attrib = {
            min: Infinity,
            all: 0,
            word: ''
        };

        const hash = new Map();

        for (let i = 0; i < licensePlate.length; i++) {
            if (licensePlate[i].toLocaleLowerCase() !== licensePlate[i].toUpperCase()) {
                const value = (hash.get(licensePlate[i].toLowerCase()) || 0)  + 1;

                hash.set(licensePlate[i].toLowerCase(), value)
            }
        }

        for (const word of words) {
            const all = helper(word, hash)

            if (word_attrib.all <= all) {

                word_attrib.all = all
                word_attrib.word = word;

            }
            
        }

        console.log(hash)
        return word_attrib.word
    };

    console.log(shortestCompletingWord("1с3 PSt", ["step","steps","stripe","stepple"]))
}