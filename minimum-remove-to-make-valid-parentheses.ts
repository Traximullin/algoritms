{
    function minRemoveToMakeValid(s: string): string {
        const stack: number[] = [];
        const invalid: number[] = [];

        for (let i = 0; i < s.length; i++) {

            const char = s[i];

            if (char === "(") {
                stack.push(i)
            } else if (char === ")") {
                if (stack.length) {
                    stack.pop();
                } else {
                    invalid.push(i);
                }
            }

        }

        const set = new Set(stack.concat(invalid))


        let r = "";

        for (let i = 0; i < s.length; i++) {
            if (!set.has(i)) 
                r += s[i];
        }

        return r;
    };
 
    console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
}