{
    const runningSum = function(nums) {
        // return nums
        //         .map(
        //             (_,index) => nums.slice(0,index + 1)
        //             .reduce((prev,curr) => prev + curr,0)
        //         )
        
        return nums.map(
            (num,i,self) => self[i] = num + (self[i-1] || 0)
        )
    }

    console.log(runningSum([1,2,3,4]))
}