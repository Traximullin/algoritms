{
    function gcdOfStrings(str1: string, str2: string): string {
        let result = str2;

        while (result) {
             if (str1.includes(result))
                return result 

             result = result.slice(0, -1)
        }

        return result
    };

    console.log(gcdOfStrings('ABCABC', 'ABC'))
}