pub fn binary_gap(n: i32) -> i32 {
    std::iter::successors(Some(n), |n| Some(n >> 1))
        .take_while(|n| n.is_positive())
        .enumerate()
        .filter_map(|(i, n)| (n & 1 == 1).then_some(i))
        .scan(usize::MAX, |p, i| {
            Some(i.saturating_sub(std::mem::replace(p, i)) as i32)
        })
        .fold(0, std::cmp::Ord::max)
}
