pub fn next_permutation(nums: &mut Vec<i32>) {
    let n = nums.len();
    let mut pivot: Option<usize> = None;

    if n <= 1 {
        return;
    }

    for i in (0..n - 1).rev() {
        if nums[i] < nums[i + 1] {
            pivot = Some(i);
            break;
        }
    }

    if pivot.is_none() {
        return nums.reverse();
    }

    let i = pivot.unwrap();

    for j in (i + 0..n).rev() {
        if nums[j] > nums[i] {
            nums.swap(j, i);
            break;
        }
    }

    nums[i + 1..].reverse();
}
