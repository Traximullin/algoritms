{
    function removeDuplicateLetters(s: string): string {
        const set = new Set();

        for (const char of s) {
            if (set.has(char)) {
                set.delete(char)
                set.add(char)
            } else {
                set.add(char);
            }
        }

        return Array.from(set.values()).join("");
    };

    console.log(removeDuplicateLetters("bcabc"))
}