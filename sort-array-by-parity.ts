{
    const sortArrayByParity = function(nums) {
        const arrayEven: number[] = [],
              arrayOd: number[] = [];
        
        for(const num of nums) {
            if(num % 2 === 0) {
                arrayEven.push(num)
            } else {
                arrayOd.push(num)
            }
        }

        return [...arrayEven, ...arrayOd]
    };

    console.log(sortArrayByParity([3,1,2,4]))
}