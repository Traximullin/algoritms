use std::collections::HashMap;

fn find_lucky(arr: Vec<i32>) -> i32 {
    let mut freq = HashMap::new();
    let mut result = -1;

    for &num in &arr {
        *freq.entry(num).or_insert(0) += 1;
    }

    for (&key, &value) in &freq {
        if key == value {
            result = result.max(key);
        }
    }

    result
}
