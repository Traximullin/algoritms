{
    function removeDuplicates(s: string): string {
        const stack = [];

        for (const c of s) {
            if(stack && stack[stack.length - 1] == c) {
                stack.pop();
                continue
            }

            stack.push(c)
        }

        return stack.join('')
    };

    console.log(removeDuplicates("abbaca"))
}