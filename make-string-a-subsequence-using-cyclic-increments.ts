{
    function helper(str: string) {
        return String.fromCharCode(str === 'z' ? 97 : str.charCodeAt(0) + 1);
    }

    function canMakeSubsequence(str1: string, str2: string): boolean {
        let c = 0

        for (let i = 0; i < str1.length; i++) {
            if (str2[c] === str1[i] || str2[c] === helper(str1[i]))
                c++
        }
    
        return c === str2.length

    };
    console.log(canMakeSubsequence('abc', "ad"))
    
}