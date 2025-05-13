{
    const isChar = (s: string) => {
        return s.toLowerCase() !== s.toUpperCase();
    }

    function letterCasePermutation(s: string): string[] {
        const r = [s];

        for (let i = 0; i < s.length; i++) {
            if (isChar(s[i])) {
                console.log(s[i])
            }
        }


        console.log(r)
    };

    console.log(letterCasePermutation("a1b2"))
}