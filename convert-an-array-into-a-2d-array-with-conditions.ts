{
    const findMatrix = function(nums) {
        let result: number[][] = [[]];
        const map = new Map();

        for(let i = 0; i < nums.length; i++) {
            const number = nums[i];
            const current = (map[number] || 0) + 1; 
            
            map[number] = current;

            if (!result[current - 1])
                result[current - 1] = [number]
            else             
                result[current - 1].push(number)
        }

        return result
    };

    console.log(findMatrix([1,3,4,1,2,3,1]))   
}