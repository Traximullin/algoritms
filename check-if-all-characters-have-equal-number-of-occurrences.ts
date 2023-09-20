{
    const areOccurrencesEqual = function(s) {
        // const obj = {}

        // for(const char of s) {
        //     if(!obj[char]) {
        //         obj[char] = 1
        //     } else {
        //         obj[char] += 1
        //     }
        // }

        // return new Set(Object.values(obj)).size <= 1
        const counter = {}

        s.split("").forEach(letter => counter[letter] = 1 + (counter[letter] || 0))

        return Object.values(counter).every(count => count === counter[s[0]])
    };

    console.log(areOccurrencesEqual("aaabb"))
}