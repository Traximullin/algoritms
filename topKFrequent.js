{
    const topKFrequent = function(nums, k) {
        let arr = []
        nums = nums.sort((a,b) => a -b )
        
        for(let num of nums) {
            arr.push(`${num}/${nums.lastIndexOf(num) + 1 - nums.indexOf(num)}`)
            nums.splice(nums.indexOf(num),nums.lastIndexOf(num) - nums.indexOf(num))
        }

        console.log(arr)

        return arr
            .sort((a,b) => +b.split("/")[1] - +a.split("/")[1])
            .map(elem => +elem.split("/")[0])
            .splice(0,k)
    };

    console.log(topKFrequent([4,1,-1,2,-1,2,3],2))
}