{
    const vowels = new Set('aeiou');

    function toGoatLatin(sentence: string): string {
        let result: string[] = [];

        for(let [index,word] of sentence.split(' ').entries()) {
            const firstChar = word[0].toLowerCase();

            if(!vowels.has(firstChar)) {
                word = word.slice(1) + word.slice(0,1)
            }

            word += 'ma' + 'a'.repeat(index + 1)

            result.push(word)
        }

        return result.join(' ')
    };

    console.log(toGoatLatin("I speak Goat Latin"))
}