{
    const reverseWords = function(string) {
        // const replacedString = string.replace(/ +/g, ' ').trim()

        // return replacedString.split(" ").reverse().join(" ")

        return string
                .split(" ")
                .filter(Boolean)
                .reverse()
                .join(" ")
    };

    console.log(reverseWords("a good   example"))
}