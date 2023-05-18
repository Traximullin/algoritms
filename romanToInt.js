{
    const ROMAN = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

    const romanToInt = function(s) {
        const result = s.split("").map((elem, index) => {
            if((elem === "V" || elem === "X") && s[index - 1] === "I") {
                return ROMAN[elem] - 2
            }

            if((elem === "L" || elem === "C") && s[index - 1] === "X") {
                return ROMAN[elem] - 20
            }

            if((elem === "D" || elem === "M") && s[index - 1] === "C") {
                return ROMAN[elem] - 200
            }

            return ROMAN[elem]
        })

        return result.reduce((prev,curr) => prev + curr, 0)
    };
     
    console.log(romanToInt("III"))
    console.log(romanToInt("LVIII"))
    console.log(romanToInt("MCMXCIV"))
}