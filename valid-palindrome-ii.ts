{
    const removeCharsByIndexes = (str: string, index: number) => 
        [...str].filter((_, i) => index !== i).join('');

    function isPalindrome(str: string) {
        let start = 0,
            right = str.length - 1;

        while (start < right) {
            if (str[start] !== str[right])
                return false;

            start += 1;
            right -= 1;
        }

        return true;
    }


    function validPalindrome(s: string): boolean {
        let start = 0;
        let right = s.length - 1;

        while (start < right) {
            if (s[start] !== s[right]) {
                const remove_start = removeCharsByIndexes(s, start);
                const remove_end = removeCharsByIndexes(s, right);

                return isPalindrome(remove_start) || isPalindrome(remove_end);
            }

            start += 1;
            right -= 1;
        }

        return true;
    };

    console.log(validPalindrome("aba"))
}