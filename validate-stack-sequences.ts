{
    function validateStackSequences(pushed: number[], popped: number[]): boolean {
        const stack: number[] = [];
        
        let link = 0;

        for (let i = 0; i < pushed.length; i++) {
            stack.push(pushed[i])

            while (stack.length && stack.at(-1) === popped[link]) {
                stack.pop();
                link += 1;
            }

        }

        return stack.length === 0
    };
    
    console.log(
        validateStackSequences(
            [1,2,3,4,5],
            [4,5,3,2,1]
        )
    )
}