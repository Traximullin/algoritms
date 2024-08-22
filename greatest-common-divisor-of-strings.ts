{
    function gcdOfStrings(str1: string, str2: string): string {
        if (str1 === str2) {
            return str1;
        }
        const max_str = str1.length > str2.length ? str1 : str2;

        let str_replace = "";

        for (let i = 1; i < max_str.length; i++) {
            const str = max_str.slice(0, i);
            
            if (str2.replaceAll(str, '') === '' && str1.replaceAll(str, '') === '') 
                str_replace = str;
        }

        return str_replace;
    };

    console.log(gcdOfStrings("A", "AA"))

}