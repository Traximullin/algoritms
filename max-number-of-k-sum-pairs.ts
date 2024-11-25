function maxOperations(nums: number[], k: number): number {
    const map = new Map();
    let c = 0;

    for (const num of nums) {

        if (num < k) {
            const search_value = k - num;
            const diff = map.get(search_value);

            if (diff) {
                map.set(search_value, diff - 1);
                c += 1;
            } else {
                const new_value = map.get(num) + 1 || 1;
                
                map.set(num, new_value);
            }

        }

    }

    return c;
};

console.log(maxOperations([3,1,3,4,3], 6))