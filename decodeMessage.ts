{
    const LANG = "abcdefghijklmnopqrstuvwxyz"

    const decodeMessage = function(key, message) {
        key = Array.from(new Set(key.replaceAll(" ", "")))

        let result = ""

        for(let i = 0; i < message.length; i++) {
            if(message[i] === " "){
                result += " "
                continue
            }
            const currentSym = key.indexOf(message[i])

            result += LANG[currentSym]
        }

        return result
    };  

    console.log(decodeMessage("the quick brown fox jumps over the lazy dog","vkbs bs t suepuv"))
}