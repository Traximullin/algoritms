{
    function numberOfPoints(nums: number[][]): number {
        const set = new Set();

        nums.forEach((num) => {
            for(let i = num[0]; i <= num[1]; i++) {
                set.add(i)
            }
        })

        return set.size
    };


    console.log(numberOfPoints([[3,6],[1,5],[4,7]]))
}