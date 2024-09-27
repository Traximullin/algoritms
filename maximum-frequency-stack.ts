{
    class PriorityQueue {
        queue: any;

        constructor() {
            this.queue  = [];
        }

        add(element: any, priority: any) {
            const new_element = {element, priority};

            let isAdd = false;
            for (let i = 0; i < this.queue.length; i++) {
                if (this.queue[i].priority > new_element.priority) {
                    this.queue.splice(i, 0, new_element);
                    isAdd = true;
                    break;
                }
            }

            if (!isAdd) {
                this.queue.push(new_element);
            }
        }
    }
    class FreqStack {
        stack = new Map();
        // приоритетная очередь
        priority_queue: number[];

        constructor() {
            this.priority_queue = [];
        }

        push(val: number): void {
            const new_value = (this.stack.get(val) || 0) + 1;

            this.stack.set(val, new_value);
            this.priority_queue.push(val);
        }
    
        pop(): number {
            let max = -1;
            const max_value = new Set<number>();

            this.stack.forEach((key, value) => {

                if (key > max) {
                    max = key;
                    max_value.clear();
                    max_value.add(value)
                }
                if (key === max) {
                    max_value.add(value);
                }

            })
            const result = this.get_priority_value(max_value)
            this.stack.set(result, max - 1);

            return result;
        }

        private get_priority_value(max_value: Set<number>): number {
            const index = this.priority_queue.findLastIndex(item => max_value.has(item))
            
            const [value] = this.priority_queue.splice(index, 1);

            return index;
        }
    }
    
    const test = new FreqStack();
    console.time('s');
    test.push(5)
    test.push(6)
    test.push(5)
    test.push(5)
    test.push(5)
    test.push(6)
    console.log(test.pop())
    console.log(test)
    console.timeEnd('s')

    const test_2 = new PriorityQueue();

    test_2.add(2,1);
    test_2.add(4,1);
    test_2.add(4,1);
    test_2.add(4,1);
    console.log(test_2)
}