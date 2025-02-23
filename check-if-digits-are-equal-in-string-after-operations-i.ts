{
    function hasSameDigits(s: string): boolean {
        
        while (s.length !== 2) {
            let r = "";

            for (let i = 1; i < s.length; i++) {
                const sum = Number(s[i]) + Number(s[i - 1]);
    
                r += sum % 10;
            }
            s = r;
        }

        return s[0] == s[1]
    };

    console.log(hasSameDigits("3902"))
}