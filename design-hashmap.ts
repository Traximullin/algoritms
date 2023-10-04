{
    class MyHashMap<T> {
        size: number;
        map: T[];

        constructor() {
            this.size = 10;
            this.map = new Array(this.size).fill(null).map(() => []);
        }
    
        hash(key) {
            return key % this.size;
        }
    
        put(key, value) {
            const i = this.hash(key);
            const bucket = this.map[i];
    
            for (let j = 0; j < bucket.length; j++) {
                if (bucket[j][0] === key) {
                    bucket[j][1] = value;
                    return;
                }
            }
    
            bucket.push([key, value]);
        }
    
        get(key) {
            const i = this.hash(key);
            const bucket = this.map[i];
    
            for (let j = 0; j < bucket.length; j++) {
                if (bucket[j][0] === key) {
                    return bucket[j][1];
                }
            }
    
            return -1;
        }
    
        remove(key) {
            const i = this.hash(key);
            const bucket = this.map[i];
    
            for (let j = 0; j < bucket.length; j++) {
                if (bucket[j][0] === key) {
                    bucket.splice(j, 1);
                    return;
                }
            }
        }
    }
}