{
    // refactor 
    // https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii
    function removeDuplicates(s: string, k: number): string {
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const char =  s[i];

            const test = stack.slice(k * -1 + 1)

            if (test.length >= k - 1 && test.every(item => item === char)) {
                stack.splice(k * -1 + 1)
            } else {
                stack.push(char)
            }
        }

        return stack.join("")
    };

    console.log(removeDuplicates("deeedbbcccbdaa", 3))
}