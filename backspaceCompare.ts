{
    const backspaceCompare = (S, T) => {
        const strip = str => {
            const stack: string[] = [];
            for (const char of str) {
                if (char === '#') {
                    stack.length > 0 && stack.pop();
                } else {
                    stack.push(char);
                }
            }
            return stack.join('');
        }
    
        return strip(S) === strip(T);
    };
}