{
    const set = new Set(['0', '1','2','3','4','5','6','7','8','9']);
    const operation = new Set(['+', '-']);
// todo
    function calculate(s: string): number {
        let stack = [];
        let numbers = [];
        let c = 0;

        for (let i = 0; i < s.length; i++) {

            if (set.has(s[i])) {
                const is_minus = stack.at(-1) === '-';
                
                c += is_minus ? +s[i] * -1 : +s[i];
            } else {
                stack.push(s[i]);
            }

            if (operation.has(s[i])) {
                numbers.push(c);
                c = 0;
            }

            if (s[i] === '(') {
                numbers.push(c);
                c = 0; 
                continue;
            }

            if (s[i] === ')') {
                stack.pop();
                numbers.push(c);
                c = 0;
            }

        }
        console.log(numbers)
        return numbers.reduce((prev, next) => prev += next, 0) + c;
    };

    // console.log(calculate("1 + 1"))
    // console.log(calculate("2-1 + 2"))
    console.log(calculate("1-( -2)"))
    // console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
}