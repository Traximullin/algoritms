{
    // refactor 
    // https://leetcode.com/problems/min-stack

    class MinStack {
        stack: number[];
        min: number;
    
        constructor() {
            this.stack = [];
            this.min = Infinity;
        }
    
        push(val: number): void {
            this.stack.push(val);
            this.min = Math.min(this.min, val);    
        }
    
        // O(1) todo
        pop(): void {
            this.stack.pop();
            this.min = Math.min(...this.stack);
        }
    
        top(): number {
            return this.stack.at(-1);
        }
    
        getMin(): number {
            return this.min;
        }
    }
    
    
    /**
    * Your MinStack object will be instantiated and called as such:
    * var obj = new MinStack()
    * obj.push(val)
    * obj.pop()
    * var param_3 = obj.top()
    * var param_4 = obj.getMin()
    */

}