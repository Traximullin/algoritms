{
    // todo
    function minAddToMakeValid(s: string): number {
        const stack: string[] = [];

        for (const char of s) {
            if (char === "(") 
                stack.push(char) 
            
            if (char === ")" && stack.length > 0) {
                stack.pop();
            }
            
            if (char === ")" && stack.length === 0) {
                console.log('!')
                stack.push(")")
            }


        }

        console.log(stack)
        
        return stack.length
    };

    console.log(minAddToMakeValid("()))(("))
    // console.log(minAddToMakeValid("((("))
}