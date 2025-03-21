{
    class Solution {
        map =  new Map();

        constructor(nums: number[]) {
            nums.forEach((num, index) => {
                let keys = this.map.get(num);

                if (keys)
                    keys.push(index)
                else 
                    keys = [index];

                this.map.set(num, keys)
            })
        }
    
        pick(target: number): number {
            const indexes = this.map.get(target);

            const random_index = ~~(Math.random() * indexes.length);

            return indexes[random_index];
        }
    }

    const test = new Solution([1,2,3,3,3]);

    console.log(test)
    
}