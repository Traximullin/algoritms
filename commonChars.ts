{
    // !TODO 
    // https://leetcode.com/problems/find-common-characters/description/
    const commonChars = function(words) {
        const result: string[] = []

        for(let i = 0; i < words[0].length; i++) {
            let flag = true;

            for(let j = 1; j < words.length; j++) {
                if (!words[j].includes(words[0][i])) {
                    flag = false
                } 
            }
            if (flag)
                result.push(words[0][i])
        }

        return Array.from(new Set(result))
    };

    console.log(commonChars(["cool","lock","cook"])
}