pub fn max_ice_cream(mut costs: Vec<i32>, coins: i32) -> i32 {
    costs.sort();
    costs
        .iter()
        .scan(0, |mut cum_sum, &cost| {
            *cum_sum += cost;
            if *cum_sum <= coins {
                Some(*cum_sum)
            } else {
                None
            }
        })
        .count() as i32
}
