{
    function decodeString(s: string): string {
        const stack = [];
        const nums = [];
    
        let num = "";
        let test = "";
    
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
    
            if (!isNaN(Number(char))) { 
                num += char;
                continue;
            }
    
            if (char === "[") {
                nums.push(Number(num)); 
                num = "";
                stack.push(test);
                test = "";
                continue;
            }
    
            if (char === "]") {
                const element = test; 
                const repeats = nums.pop()!; 
    
                test = stack.pop()! + element.repeat(repeats); 
                continue;
            }
    
            test += char;
        }
    
        return test; 
    }
    
    console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'));
    
    
    
    console.log(decodeString("leetcode"))
    console.log(decodeString("3[a2[c2[de]]]"))
    console.log(decodeString("2[abc]3[cd]ef"))
}