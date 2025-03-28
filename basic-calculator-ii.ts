{
    function calculate(s: string): number {
        s = s.replace(/ /g, '')
        const stack: number[] = [];
        let operations = "";
        let num = "";

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (!Number.isNaN(Number(char))) {
                if (stack.length === 0) {
                    num += char;
                } else {
                    if (operations === '*') {
                        stack.push(~~(stack.pop()! * Number(char)))
                    }
                    if (operations === '/') {
                        stack.push(~~(stack.pop()! / Number(char)))
                    }
                    if (operations === '+') {
                        stack.push(stack.pop()! + Number(char))
                    }
                    if (operations === '-') {
                        stack.push(stack.pop()! - Number(char))
                    }
                }
            } else {
                stack.push(Number(num))
                num = "";
                operations = char;
            }
        }

        return stack[0]
    };

    console.log(calculate('3 + 2 / 2'))
}