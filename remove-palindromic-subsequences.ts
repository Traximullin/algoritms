{
    function removePalindromeSub(s: string): number {
        let start = 0;
        let end = s.length - 1;

        while(start < end) {
            if(s[start] !== s[end]) {
                return 2
            }

            start++
            end--
        }

        return 1
    };

    console.log(removePalindromeSub('ababa'))
}