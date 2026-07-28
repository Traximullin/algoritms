function smallestPalindrome(str: string): string {
    const freqArr = Array.from({ length: 26 }, () => 0);

    for (const char of str) {
        freqArr[char.charCodeAt(0) - 97]++;
    }

    const newPalindromic = Array.from({ length: str.length }, () => "");
    let curIndex = 0;
    for (let i = 0; i < freqArr.length; i++) {
        const char = String.fromCharCode(97 + i);
        const freq = freqArr[i];

        if (freq % 2 !== 0) {
            newPalindromic[Math.floor(newPalindromic.length / 2)] = char;
        }

        let charToAddFromOneSide = Math.floor(freq / 2);

        while (charToAddFromOneSide) {
            newPalindromic[curIndex] = char;
            newPalindromic[newPalindromic.length - curIndex - 1] = char;
            curIndex++;
            charToAddFromOneSide--;
        }
    }

    return newPalindromic.join("");
}
