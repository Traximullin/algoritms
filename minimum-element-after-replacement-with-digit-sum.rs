pub fn min_element(nums: Vec<i32>) -> i32 {
    let mut min = i32::MAX;

    for num in nums {
        let sum: i32 = num
            .to_string()
            .chars()
            .filter_map(|c| c.to_digit(10)) 
            .map(|n| n as i32)              
            .sum(); 

        if sum < min {
            min = sum;
        }
    }

    return min;
}