{
    function makeFancyString(s: string): string {
        if (s.length < 3) 
            return s;

        let res = s[0];

        for (let i = 1; i < s.length; ++i) {
            if (s[i - 1] === s[i] && s[i] === s[i + 1]) 
                continue;

            res += s[i];
        }

        return res;
    };

    console.log(makeFancyString("leeetcode"))   
}