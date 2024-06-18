{
    function unequalTriplets(nums: number[]): number {
        let c = 0;

        for (let i = 0; i < nums.length - 2; i++) {

            for (let j = i + 1; j < nums.length - 1; j++) {

                for (let k = j + 1; k < nums.length; k++) {

                    if (nums[i] != nums[j] && nums[i] != nums[k] && nums[j] != nums[k]){
                        c++;
                    }

                }

            }

        }

        return c;
    };

    console.log(unequalTriplets([4,4,2,4,3]))
}