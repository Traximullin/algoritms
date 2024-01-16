{
    class RandomizedSet {
        private map: Map<number, number>;
        private arr: number[];
    
        constructor() {
            this.map = new Map();
            this.arr = [];
        }
    
        insert(val: number): boolean {
            if(this.map.has(val)) {
                return false
            }

            this.map.set(val, this.arr.length)
            this.arr.push(val)

            return true
        }
    
        remove(val: number): boolean {
            if(!this.map.has(val)) {
                return false
            }
            const indexRemove = Number(this.map.get(val));
            const lastValue = this.arr[this.arr.length - 1];

            this.arr[indexRemove] = lastValue;
            // сохранение порядка
            this.map.set(lastValue, indexRemove)

            this.arr.pop();
            this.map.delete(val)

            return true
        }
    
        getRandom(): number {
            const index = this._getRandomNumberByLength();

            return this.arr[index]
        }

        _getRandomNumberByLength() {
            return ~~(Math.random() * this.arr.length)
        }
    }
    
    const obj = new RandomizedSet();
    console.log(obj.insert(2))
    console.log(obj.insert(1))
    console.log(obj.insert(3))
    console.log(obj.remove(1))
    console.log(obj)
    console.log(obj.insert(1))
    console.log(obj.insert(2))
    console.log(obj.insert(3))
    console.log(obj.insert(4))
    console.log(obj.getRandom())
}