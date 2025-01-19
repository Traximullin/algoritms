{
    function compress(chars: string[]): number {
        let p = 0;
        let i = 0;
        const length = chars.length;

        while (i < length) {
            const char = chars[i];

            let c = 0;

            while (i < length && chars[i] == char) {
                i++;
                c++;
            }

            chars[p] = char;
            p++;

            if (c > 1) {
                for (const digit of c.toString()) {
                    chars[p] = digit;
                    p += 1;
                }
            }

        }

        return p;
    }

    // function compress(chars: string[]): number {
    //     let c = 1;

    //     for (let i = chars.length - 1; i >= 0; i--) {
    //         if (chars[i] === chars[i - 1]) {
    //             c++;
    //         } else {
    //             if (c > 1) {
    //                 const c_str = c.toString();
        
    //                 chars.splice(i + 1, c - 1);
        
    //                 chars.splice(i + 1, 0, ...c_str);
    //             }
    //             c = 1; 
    //         }
    //     }
    
    //     return chars.length;
    // }

    console.log(compress(["а","а","б","б","в","в","в"]))
    

}