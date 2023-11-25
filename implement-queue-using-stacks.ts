{
    class MyQueue {
        stacks: number[];

        constructor() {
            this.stacks = []
        }

        push(number: number) {
            this.stacks.push(number)
        }

        peek() {
            return this.stacks[0]
        }

        pop() {
            return this.stacks.shift()
        }

        empty() {
            return this.stacks.length === 0
        }
    }

    const myQueue = new MyQueue();

    myQueue.push(1)
    myQueue.push(2)
    console.log(myQueue.peek())
    console.log(myQueue.pop())

    console.log(myQueue)
}