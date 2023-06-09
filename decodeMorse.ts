const MORSE_CODE = {
    ".-": "a",
    "-...":"b",
    "-.-.": "c",
    "-..": "d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    "-----":"0",
    "|":" "
};

const decodeMorse = (morseCode: string) => {
    const test = morseCode.trim().split(" ")
    let str = ""

    test.forEach(elem => {
        if(MORSE_CODE[elem]) {
            str += MORSE_CODE[elem]
        }
    })

    return str
}

// console.log(decodeMorse('   .... . -.--   '))
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."))


