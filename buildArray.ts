{
    const buildArray = function(nums) {
        // return nums.map(elem => nums[elem])

        const arr: number[] = []

        nums.forEach((_,i) => {
            arr[i] = nums[nums[i]]
        })

        return arr
    }

    console.log(buildArray([0,2,1,5,3,4]))
}