{
    const reverseVowels = function(s) {
        const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'])
        const stack = [];
        let result = '';

        for(let i = 0; i < s.length; i++) {
            if(vowels.has(s[i])) {
                stack.push(s[i])
            }
        }

        for(let i = 0; i < s.length; i++) {
            if(vowels.has(s[i])) {
                result += stack.pop();
            } else {
                result += s[i]
            }
        }

        return result
    };

    console.log(reverseVowels('hello'))

}