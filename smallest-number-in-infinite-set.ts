{
    class SmallestInfiniteSet {
        set = new Set();
        small = 1;
        
        popSmallest(): number {
            for (let i = 1; i <= 1000; i++) {
                if (!this.set.has(i)) {
                    this.set.add(i);
                    return i;
                }
            }

            return -1;
        }

        addBack(num: number): void {
            this.set.delete(num);
        }
    }

    const test = new SmallestInfiniteSet();



}