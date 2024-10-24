{
    function findKthPositive(arr: number[], k: number): number {
        const max = arr.at(-1) || 0;
        const set = new Set(arr);
        let c = 0;

        for (let i = 1; i <= max; i++) {
            if (!set.has(i)) {
                c++;

                if (c === k) {
                    return i
                }
            }
        }

        return max + k - c;
    };

    // function findKthPositive(arr: number[], k: number): number {
    //     let left = 0;
    //     let right = arr.length;
    
    //     while (left < right) {
    //         const mid = Math.floor((left + right) / 2);
            
    //         const missing = arr[mid] - (mid + 1);
            
    //         if (missing < k) {
    //             left = mid + 1;
    //         } else {
    //             right = mid;
    //         }
    //     }
    
    //     return left + k;
    // }

    console.log(findKthPositive([5,6,7,8,9], 9))
}