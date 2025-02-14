{
    class ProductOfNumbers {
        nums: number[];

        constructor() {
            this.nums = [1];
        }
    
        add(num: number): void {
            if (num == 0)
                this.nums = [1];
            else 
                this.nums.push(num * this.nums.at(-1));
        }
    
        getProduct(k: number): number {
            if (k < this.nums.length)
                return this.nums.at(-1) / this.nums.at(-k - 1); 
            else 
                return 0;
        }
    }

    const test = new ProductOfNumbers();
    test.add(3)
    test.add(0)
    test.add(2)
    test.add(5)
    test.add(4)

    console.log(test.getProduct(2))
}