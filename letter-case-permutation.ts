{
    const isChar = (s: string) => {
        return s.toLowerCase() !== s.toUpperCase();
    }

    function letterCasePermutation(s: string): string[] {
        const r = [s];

        let cache=  s;

        for (let i = 0; i < s.length; i++) {
            if (isChar(s[i])) {
                
            }
        }


        console.log(r)
    };

    console.log(letterCasePermutation("a1b2"))
}