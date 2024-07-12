{
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut hash = HashSet::new();

        for num in nums.iter() {
            if hash.contains(num) {
                hash.remove(num);
            } else {
                hash.insert(*num);
            }
        };

        *hash.iter().next().unwrap()
    }
}