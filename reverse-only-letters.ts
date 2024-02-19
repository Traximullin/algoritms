{
    const reverseOnlyLetters = function(s) {
        let result = ''
        let stack = [];
        const len = s.length;
    
        for(let i = 0; i < len; i++) {
            if(s[i].toLowerCase() !== s[i].toUpperCase()) {
                stack.push(s[i])
            }
        }
    
        for(let i = 0; i < len; i++) {
            if(s[i].toLowerCase() !== s[i].toUpperCase()) {
                result += stack.pop();
            } else {
                result += s[i]
            }
        }
    
        return result
    };
}