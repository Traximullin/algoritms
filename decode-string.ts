{
    // todo 
    // https://leetcode.com/problems/decode-string/
    function decodeString(s: string): string {
        const stack: number[] = [];
        let num = "";
        const stack_nums: string[] = [];
        let count = 0;

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            count += 1;

            if (count > 40) {
                break
            }
            if (!Number.isNaN(Number(char))) {
                num += char;
            }

            if (char === "[") {
                stack.push(i + 1);
                stack_nums.push(num);
                num = "";
            }
    
            if (char === "]") {
                const open_index = stack.pop() || 1;
                const delete_number = stack_nums.pop();
                const count_repeats = Number(delete_number) || 0;

                const value = s.slice(open_index, i).repeat(count_repeats);
                console.log(value)
                console.log(s.slice(open_index - (delete_number?.length || 1) - 1, i + 1))
                s = s.replace(s.slice(open_index - (delete_number?.length || 1) - 1, i + 1), value)

                i -= count_repeats;
            }
    
        }
    
        return s
    };
    console.log([1,2,3].slice(1,3))
    // console.log(decodeString("3[a2[c]]"))
    console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"))
}