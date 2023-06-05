{
    const maxArea = function(height) {
        // let maxArea = 0

        // for(let left = 0; left < height.length; left++) {

        //     for(let rigth = left + 1; rigth < height.length; rigth++) {
        //         const width = rigth - left
        //         maxArea = Math.max(maxArea, Math.min(height[left], height[rigth]) * width)
        //     }

        // }

        // return maxArea
        let result = 0,
            left = 0,
            rigth = height.length - 1

        while(left < rigth) {
            const smillestSide = Math.min(height[left], height[rigth])
            const area =  (rigth - left) * smillestSide

            if(area > result) result = area
            if(height[left] < height[rigth]) left++
            else rigth--
        }

        return result
    };

    console.log(maxArea([1,8,6,2,5,4,8,3,7]))

}