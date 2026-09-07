function scoreBalance(str: string): boolean {
    let rightPartScore = 0;

    for (const char of str) {
        rightPartScore += char.charCodeAt(0) - 96;
    }

    let canSplit = false;
    let leftPartScore = 0;
    for (let i = 0; i < str.length; i++) {
        const score = str[i].charCodeAt(0) - 96;
        leftPartScore += score;
        rightPartScore -= score;

        if (leftPartScore === rightPartScore) {
            canSplit = true;
            break;
        }
    }


    return canSplit;
};
