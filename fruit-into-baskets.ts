{
    function totalFruit(fruits: number[]): number {
        let res = Number.MIN_VALUE;
        let baskets = new Map()
        let slow = 0;

        for (let i = 0; i < fruits.length; i++) {
            if (baskets.size === 2 && !baskets.has(fruits[i])) {
                while (baskets.size == 2) {
                    const type = fruits[slow];
                    const num = baskets.get(type) - 1
                    if (num === 0) {
                        baskets.delete(type)
                    } else {
                        baskets.set(type, num)
                    }
                    slow++;
                }
            }
            const num = baskets.get(fruits[i]) || 0
            baskets.set(fruits[i], num + 1)
            const index = (i - slow) + 1;
            res = Math.max(res, index)
        }

        return res
    };
}