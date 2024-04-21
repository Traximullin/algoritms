pub fn min_operations(mut nums: Vec<i32>) -> i32 {
    let mut с = 0;

    for i in 0..nums.len(){
        if i != 0{
            if nums[i] <= nums[i-1]{                 
                с+= nums[i-1] - nums[i] + 1;
                nums[i] = nums[i-1] + 1;
            }
        }
    }

    с
}
