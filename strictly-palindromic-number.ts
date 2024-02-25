{
    function isPalindromic(binary: string) {
        let start = 0,
            end = binary.length - 1;

        while(start < end) {
            if(binary[start] !== binary[end]) {
                return false
            }

            start++
            end--

        }
        
        return true

    }

    function isStrictlyPalindromic(n: number): boolean {
        const maxPal = n - 2;

        for(let i = 2; i <= maxPal; i++) {
            const b = n.toString(i)

            if(!isPalindromic(b)) 
                return false
    
        }

        return true
    };

    console.log(isStrictlyPalindromic(9))
    console.log(isStrictlyPalindromic(2))
}