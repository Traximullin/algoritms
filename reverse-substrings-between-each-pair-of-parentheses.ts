{
    function reverseParentheses(s: string): string {
        const stack: number[] = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (char === '(') {
                stack.push(i + 1)
            }

            if (char === ")") {
                const open_index = stack.pop() || 1;
                const new_value = s.slice(open_index, i).split('').reverse().join("");

                s = s.slice(0, open_index - 1) + new_value + s.slice(i + 1, s.length)
                i -= 2;
            }
            
        }

        return s;
    };

    console.log(reverseParentheses('(u(love)i)'))
}