{
    const makeSmallestPalindrome = function(s) {
        let str = s.split('')

        for(let i = s.length - 1, j = 0; i >= Math.ceil(s.length / 2); i--, j++) {
            if(str[i] < str[j]) {
                str[j] = str[i]
            } else {
                str[i] = str[j]
            }
        }
        
        return str.join('')
    };
}