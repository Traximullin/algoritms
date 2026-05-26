function numberOfSpecialChars(word: string): number {
    const seen = new Uint8Array(128);

    for (let i = 0; i < word.length; i++) {
        seen[word.charCodeAt(i)] = 1;
    }

    let count = 0;

    for (let i = 97; i <= 122; i++) {
        if (seen[i] === 1 && seen[i - 32] === 1) {
            count++;
        }
    }

    return count;
};
