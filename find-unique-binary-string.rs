pub fn find_different_binary_string(nums: Vec<String>) -> String {
    let mut r = String::new();

    for i in 0..nums.len() {
        let chars: Vec<char> = nums[i].chars().collect(); 
        
        if chars[i] == '1' {
            r.push('0');
        } else {
            r.push('1');
        }
    }

    r
}