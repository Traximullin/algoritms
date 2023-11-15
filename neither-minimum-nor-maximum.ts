{
    const findNonMinOrMax = function(nums) {
        const max = Math.max(...nums),
            min = Math.min(...nums);

        return nums.find(elem => elem !== max && elem !== min) || -1
    };

    console.log(findNonMinOrMax([2,1,3]))
}