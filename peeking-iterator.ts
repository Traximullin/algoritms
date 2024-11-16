class IteratorTest {
    hasNext(): boolean {}
    next(): number {}
}

class PeekingIterator {
        iterator: IteratorTest;
        val: any;
        peeked: boolean;

    constructor(iterator: IteratorTest) {
        this.iterator = iterator;
        this.val = null;
        this.peeked = false;
    }

    peek(): number {
        if (this.val !== null) {
            return this.val;
        } else {
            this.val = this.iterator.next();
            return this.val;
        }
    }

    next(): number {
        if (this.val) {
            const ret = this.val;
            
            this.val = null;

            return ret;
        } else {
            this.val = null;
            
            return this.iterator.next();
        }
    }

    hasNext(): boolean {
        return this.iterator.hasNext() || this.val !== null;
    }
}
