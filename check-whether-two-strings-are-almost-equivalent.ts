{

    function checkAlmostEquivalent(word1: string, word2: string): boolean {
        const chars = Array.from<number>({length: 26}).fill(0)

        for (let i = 0; i < word1.length; i++) {
            chars[word1.charCodeAt(i) - 97] += 1;
        }

        for (let i = 0; i < word2.length; i++) {
            chars[word2.charCodeAt(i) - 97] -= 1;
        }

        return chars.every(counter => Math.abs(counter) <= 3)
    };

    // console.log(checkAlmostEquivalent('abcdeef', "abaaacc"))
    console.log(checkAlmostEquivalent("zzzyyy", "iiiiii"))
}