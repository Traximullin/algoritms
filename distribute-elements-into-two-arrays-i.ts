{
    function resultArray(nums: number[]): number[] {
        const arr_one = [nums[0]];
        const arr_two = [nums[1]];

        for (let i = 2; i < nums.length; i++) {

            if(arr_one[arr_one.length - 1] > arr_two[arr_two.length - 1]) {
                arr_one.push(nums[i])
            } else {
                arr_two.push(nums[i])
            }

        }

        return [...arr_one, ...arr_two]
    };

    console.log(resultArray([2,1,3]))
}