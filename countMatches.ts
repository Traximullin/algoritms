{
    enum RuleKey {
        type,
        color,
        name,
    }

    function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
        let count = 0

        for (const candidate of items) {
            const keyValue = candidate[RuleKey[ruleKey]]
            
            if(keyValue === ruleValue) {
                count++
            }

        }

        return count
    };

    console.log(countMatches([
        ["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]
    ],
        "color",
        "silver"
    ))
}