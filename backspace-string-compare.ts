{
    function backspaceCompare(s: string, t: string): boolean {
        function _helper(str: string) {
            const stack: string[] = [];

            for (const char of str) {
                if (char === '#') 
                    stack.pop();
                else 
                    stack.push(char)
            }

            return stack.join("")
        }

        return _helper(s) === _helper(t)
    };

    console.log(backspaceCompare("ab#c", "ad#c"))
}