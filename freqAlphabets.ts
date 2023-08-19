{
    const getCharackter = (symb) => {
        return String.fromCharCode(Number(symb) + 96)
    }

    const freqAlphabets = function(string) {
        const result: string[] = []
        
        for(let i = 0; i < string.length; i++) {
            if(string[i + 2] === "#") {
                const currentChar = getCharackter(string[i] + string[i + 1])

                result.push(currentChar)
                i += 2
            }  else {
                result.push(getCharackter(string[i]))
            }

        }
        
        return result.join("")
    };

    console.log(freqAlphabets("10#11#12"))

}