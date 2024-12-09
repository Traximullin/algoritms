{
    function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
        const prefix_sum = [0];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] % 2 !== nums[i - 1] % 2) {
                prefix_sum.push(prefix_sum.at(-1));
            } else {
                prefix_sum.push(prefix_sum.at(-1) + 1);
            }
        }

        return queries.map(([from,to]) => prefix_sum[from] === prefix_sum[to]);
    }
    // function helper(num: number) {
    //     const string_num = num.toString();

    //     const last_digit = string_num.at(-1);

    //     return (
    //         last_digit === '0' || 
    //         last_digit === '2' || 
    //         last_digit === '4' || 
    //         last_digit === '6' || 
    //         last_digit === '8'
    //     ) ? 0 : 1;
    // }

    // function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    //     const result: boolean[] = [];
    
    //     for (let [start, end] of queries) {
    //         let isSpecial = true;
    
    //         while (start < end) {

    //             if (helper(nums[start]) === helper(nums[start + 1]) || helper(nums[end]) === helper(nums[end - 1])) {
    //                 isSpecial = false;
    //                 break;
    //             }
    
    //             start++;
    //             end--;
    //         }
    
    //         result.push(isSpecial);
    //     }
    
    //     return result;
    // }
    
    // console.log(isArraySpecial([3,4,1,2,6], [[0,4]]))
    console.log(isArraySpecial([4,3,1,6], [[0,2],[2,3]]))
}