{
    const maxLengthBetweenEqualCharacters = function(s) {
        let output = -1;

        for(let i = s.length - 1; i > 0; i--) {
            let char = s.indexOf(s[i])

            output = Math.max(output, i - (char + 1))
        }

        return output
    };

    console.log(maxLengthBetweenEqualCharacters("abca"))
}