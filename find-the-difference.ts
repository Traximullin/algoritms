{
    const findTheDifference = function(s, t) {
        for(const char of s) {
            t = t.replace(char, "")
        }

        return t

        // let c = 0;

        // for (let i = 0; i < t.length; i++) {
        //     c ^= t.charCodeAt(i) ^ s.charCodeAt(i);
        // }

        // return String.fromCharCode(c);
    };

    console.log(findTheDifference("abcd", "abcde"))
}