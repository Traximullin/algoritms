pub fn most_frequent_even(nums: Vec<i32>) -> i32 {
    let mut hash = HashMap::new();

    for num in nums {
        if num % 2 == 0 {
            let count = hash.entry(num).or_insert(0);
            *count += 1;
        }
    }

    let mut result: i32 = -1; 
    let mut max_freq = 0;

    for (key, value) in hash.iter() {
        if *value > max_freq || (*value == max_freq && *key < result) {
            max_freq = *value;
            result = *key;
        }
    }

    result
}