use std::collections::BTreeMap;

pub fn merge_arrays(nums1: Vec<Vec<i32>>, nums2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let mut map = BTreeMap::new();

    for nums in nums1.iter().chain(nums2.iter()) {
        if let [key, value] = nums[..] {
            *map.entry(key).or_insert(0) += value;
        }
    }

    map.into_iter().map(|(k, v)| vec![k, v]).collect()
}
