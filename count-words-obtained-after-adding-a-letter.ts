{
    // todo https://leetcode.com/problems/count-words-obtained-after-adding-a-letter
    
    function helper(str1: string, str2: string): number {
        if (str1.length === str2.length) {
            return 0;
        }

        let diffCount = 0;
    
        for (let i = 0; i < str1.length; i++) {
            if (!str2.includes(str1[i])) {
                diffCount++;
            }
        }
    
        diffCount += Math.abs(str1.length - str2.length);
    
        return diffCount - 1;
    }
    

    function wordCount(startWords: string[], targetWords: string[]): number {
        let c = 0;

        for (const word of startWords) {

            for (const target of targetWords) {
                if(helper(word, target) == 1) {
                    c += 1;

                    break;
                };
            }
            
        }

        return c;
    };

    console.log(wordCount(["ant","act","tack"], ["tack","act","acti"]))
    console.log(wordCount(["ab","a"], ["abc","abcd"] ))
}