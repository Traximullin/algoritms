{
    class CustomStack {
        stack: number[];

        constructor(private maxSize: number) {
            this.stack = [];
        }
    
        push(x: number): void {
            if (this.maxSize > this.stack.length)
                this.stack.push(x)
        }
    
        pop(): number {
            return this.stack.pop() || -1;
        }
    
        increment(k: number, val: number): void {
            const iter = Math.min(k, this.stack.length);

            for (let i = 0; i < iter; i++) 
                this.stack[i] += val;
            
        }
    }

    const stk = new CustomStack(3); // Стек пуст []
    stk.push(1); // стек становится [1]
    stk.push(2); // стек становится [1, 2]
    stk.push(3); // стек становится [1, 2]
    stk.push(4); // стек становится [1, 2]
    stk.increment(5, 100); // стек становится [101, 102, 103]
    console.log(stk)
    stk.increment(2, 100); // стек становится [201, 202, 103]
    console.log(stk)
    console.log(stk.pop())
}