{
    function gcdOfStrings(str1: string, str2: string): string {
        for (let i = 1; i < str1.length; i++) {
            const str = str1.slice(0, i);

            if (str2.replaceAll(str, '') === '' && str1.replaceAll(str, '') === '') 
                return str
        }

        return ''
    };

    console.log(gcdOfStrings('ABCABC', 'ABC'))
}