pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
    let mut c = 0;
    let uniq_jewels: HashSet<char> = HashSet::from_iter(jewels.chars());

    for stone in stones.chars() {
        if uniq_jewels.contains(&stone) {
            c += 1;
        } 
    };

    return c;
}