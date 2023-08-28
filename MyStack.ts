class MyStack {
    stack: number[]

    constructor() {
        this.stack = []
    }

    push(number: number) {
        this.stack.push(number)
    }

    pop() {
        if (this._isEmpty()) {
            return null
        }

        return this.stack.pop()
    }

    top() {
        if (this._isEmpty()) {
            return null
        }

        return this.stack.at(-1)
    }

    empty() {
        return this._isEmpty()
    }

    _isEmpty() {
        return this.stack.length === 0
    }
}

const obj = new MyStack()