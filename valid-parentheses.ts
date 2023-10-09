{
    const isValid = function(s) {
        const stack: string[] = []
    
        for (let i = 0; i < s.length; i++) {
            const char = s[i]

            switch (char) {
                case '(': stack.push(")")
                    break;
                
                case '[': stack.push("]")
                    break;
                
                case "{": stack.push("}")
                    break;
                
                default:
                    if (char !== stack.pop()) {
                        return false
                    }
            }
        }

        return stack.length === 0
    };

    console.log(isValid("{}[]()"))
}