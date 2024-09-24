{
    class FreqStack {
        private hash = new Map();
        private test = new Map();
        private counter = 0;

        constructor() {

        }
    
        push(val: number): void {
            const new_value = (this.hash.get(val) || 0) + 1
        
            this.hash.set(val, new_value);

            this.test.set(val, this.counter);
            this.counter += 1;
        }
    
        pop(): number {
            let max = -1;
            let max_number = 0;

            this.hash.forEach((key, item) => {
                if (key > max) {
                    max = key;
                    max_number = item;
                }
            })

            this.hash.set(max_number, max - 1);

            return max_number
        }
    }

    const test = new FreqStack();

    test.push(5)
    test.push(6)
    test.push(5)
    test.push(3)
    test.push(6)
    console.log(test.pop())
    console.log(test)
}