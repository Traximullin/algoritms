const primes: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

function convertStringToPrimeValue(s: string): number {
    let total: number = 1;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const primeNumber = primes[c.charCodeAt(0) - 97];
        total *= primeNumber;
    }
    return total;
}

function groupAnagrams(strs: string[]): string[][] {
    const groupedAnagrams: string[][] = [];
    const groupAnagramMap: Map<number, number> = new Map();
    for (let i = 0; i < strs.length; i++) {
        const s = strs[i];
        const primeValue: number = convertStringToPrimeValue(s);
        if (groupAnagramMap.has(primeValue)) {
            groupedAnagrams[groupAnagramMap.get(primeValue)].push(s);
        } else {
            groupAnagramMap.set(primeValue, groupedAnagrams.length);
            groupedAnagrams.push([s]);
        }
    }
    return groupedAnagrams;
};
