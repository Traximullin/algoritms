pub fn get_common(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
    let (n1, n2) = (nums1.len(), nums2.len());
    let (mut i, mut j) = (0, 0);

    while i < n1 && j < n2 {
        if nums1[i] == nums2[j] {
            return nums1[i];
        }
        if nums1[i] < nums2[j] {
            i += 1;
        } else {
            j += 1;
        }
    }
    -1
}
