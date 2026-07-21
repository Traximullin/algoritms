function maxActiveSectionsAfterTrade(s: string): number {
    let oneCount = 0;
    let convertedOne = 0;
    let curZeroCount = 0;
    let lastZeroCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            curZeroCount++;
        } else {
            if (curZeroCount !== 0) {
                lastZeroCount = curZeroCount;
            }
            curZeroCount = 0;
            oneCount++;
        }
        convertedOne = Math.max(convertedOne, curZeroCount + lastZeroCount);
    }

    if (convertedOne === curZeroCount || convertedOne === lastZeroCount) {
        return oneCount;
    }

    return oneCount + convertedOne;
}
