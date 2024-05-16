{
    function canBeEqual(target: number[], arr: number[]): boolean {
        if (target.length !== arr.length) 
            return false

        const hash = new Map();

        for (const num of target) {
            const value = (hash.get(num) || 0) + 1;

            hash.set(num, value)
        }

        for (const num of arr) {
            const value = (hash.get(num) || 0) - 1
    
            if (value < 0) {
                return false
            }

            hash.set(num, value)
        }

        return true
     };

    console.log(canBeEqual([1,2,3,4], [2,4,1,3]))
}