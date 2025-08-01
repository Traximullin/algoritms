pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
    std::iter::successors(Some(vec![1]), |prev| {
        Some(
            std::iter::once(1)
                .chain(prev.windows(2).map(|w| w[0] + w[1]))
                .chain(std::iter::once(1))
                .collect(),
        )
    })
    .take(num_rows as usize)
    .collect()
}
