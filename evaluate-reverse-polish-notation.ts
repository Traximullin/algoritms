{
    const OPERATION = new Set(["*", "/", "+", "-"])
    function evalRPN(tokens: string[]): number {

        const stack: number[] = [];

        for (const char of tokens) {
            if (OPERATION.has(char)) {
                const [start, end] = stack.splice(stack.length - 2, 2);

                if (char === "+") {
                    stack.push(start + end)
                }
                if (char === "-") {
                    stack.push(start - end)
                }
                if (char === "/") {
                    stack.push(~~(start / end)) 
                }
                if (char === "*") {
                    stack.push(start * end)
                }

            } else {
                stack.push(parseInt(char))
            }
        }

        return stack[0];
    };

    console.log(evalRPN(["2","1","+","3","*"]));
    console.log(evalRPN(["4","13","5","/","+"]))
    console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
}