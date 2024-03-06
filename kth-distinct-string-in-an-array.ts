{
    function kthDistinct(arr: string[], k: number): string {
        const hash = new Map();
        const result = [];

        for(let i = 0; i < arr.length; i++) {
            const value = (hash.get(arr[i]) || 0) + 1

            hash.set(arr[i], value)
        }


        for(let [key, value] of hash.entries()) {
            if(value === 1) {
                result.push(key)
            }
        }

        return result[k - 1] || ''
    };

    console.log(kthDistinct(["d","b","c","b","c","a"], 2))
}