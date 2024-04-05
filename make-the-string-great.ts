{
    function makeGood(s: string): string {
        const stack = [];

        for(let i = 0; i < s.length; i++) {
            const c = s[i];

            if(stack.length > 0 && stack.at(-1).toLowerCase() === c.toLowerCase() && stack.at(-1) !== c) {
                stack.pop()
            } else {
                stack.push(c)
            }
        }

        return stack.join('')
    }

}