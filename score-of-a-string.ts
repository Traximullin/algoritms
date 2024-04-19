{
    function scoreOfString(s: string): number {
        let c = 0;

        for(let i = 1; i < s.length; i++) {
            c += Math.abs(s[i - 1].charCodeAt(0) - s[i].charCodeAt(0))
        }

        return c
    };

    console.log(scoreOfString('hello'))
}