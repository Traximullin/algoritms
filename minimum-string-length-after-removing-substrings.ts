{
    function minLength(s: string): number {
        const stack: string[] = [];

        for(let i = 0; i < s.length; i++) {
            console.log(stack)
            if(stack.at(-1) + s[i] !== 'AB' && stack.at(-1) + s[i] !== "CD") {
                stack.push(s[i])
            } else {
                stack.pop()
            }
        }


        return stack.length

        // const sub_string = ["AB", "CD"]
        
        // let i = 0;

        // for(null; i <= s.length - 1; ++i) {
        //     const char = s[i] + s[i + 1]
            
        //     if (sub_string.includes(char)) {
        //         s = s.replace(char, '')
        //         i = -1
        //     }
        // }

        // return s.length
    };

    // console.log(minLength('ABFCACDB'))
    // console.log(minLength('ACBBD'))
    console.log(minLength('CCCCDDDD'))
}