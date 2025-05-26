{
    function minDeletion(s: string, k: number): number {
        const freqMap: Record<string, number> = {};

        for (const char of s)
            freqMap[char] = (freqMap[char] || 0) + 1;

        const frequencies = Object.values(freqMap);

        if (frequencies.length <= k) 
            return 0;

        frequencies.sort((a, b) => a - b);

        const toRemove = frequencies.length - k;
        let deletions = 0;

        for (let i = 0; i < toRemove; i++)
            deletions += frequencies[i];

        return deletions;
    }
}