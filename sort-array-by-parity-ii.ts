{
    var sortArrayByParityII = function(nums) {
        let res = [];
        nums = nums.sort()
        
        let odd = [];
        let even = [];
        
        for (let i = 0; i < nums.length; i++) {
          if(nums[i] % 2 === 0) odd.push(nums[i]);
        
          else {
            even.push(nums[i])
          }  
        }
        
        for (let i = 0; i < nums.length; i++) {
          if(i % 2 === 0)
            res.push(odd.pop())
          else  res.push(even.pop())
        }

        return res
    };
}