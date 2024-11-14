{
    // todo https://leetcode.com/problems/count-words-obtained-after-adding-a-letter
    
    function helper(str1: string, str2: string): boolean {
        if (str2.length !== str1.length + 1) {
            return false;
        }
    
        const sortedStr1 = str1.split('').sort();
        const sortedStr2 = str2.split('').sort();
    
        let diffCount = 0;
        let i = 0, j = 0;
    
        while (i < sortedStr1.length && j < sortedStr2.length) {
            if (sortedStr1[i] === sortedStr2[j]) {
                i++;
                j++;
            } else {
                diffCount++;
                j++; 
            }

            if (diffCount > 1) {
                return false;
            }
        }
    
        return diffCount === 1 || j === sortedStr2.length - 1;
    }
    

    function wordCount(startWords: string[], targetWords: string[]): number {
        let c = 0;
        const cache = new Set();

        for (const word of startWords) {

            for (const target of targetWords) {
                if (helper(word, target) && !cache.has(target)) {
                    c += 1;
                    cache.add(target)
                }
            }
            
        }

        return c;
    };

    console.log(wordCount(["ant","act","tack"], ["tack","act","acti"]))
    console.log(wordCount(["ab","a"],["abc","abcd"]))
}