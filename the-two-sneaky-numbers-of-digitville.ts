{
    function getSneakyNumbers(nums: number[]): number[] {
        const origin = []
        const result = []

        nums.forEach((num, i) => {
            origin[num] != undefined ? result.push(num) : origin[num] = num
        })

        return result
    };
}