{
    const replaceDigits = function(s) {
        let result = ""

        for(let i = 0; i < s.length; i++) {
            if(!isNaN(s[i])) {
                const newValue = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]))

                result += newValue
            } else {
                result += s[i]
            }
        }

        return result
    };

    console.log(replaceDigits("a1c1e1"))
}