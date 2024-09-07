pub fn number_of_pairs(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> i32 {
    let mut c = 0;

    for num_1 in &nums1 {

        for num_2 in &nums2 {

            if num_1 % (num_2 * k) == 0 {
                c += 1;
            }

        }
    }

    return c;   
}