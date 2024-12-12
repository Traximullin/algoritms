pub fn pick_gifts(mut gifts: Vec<i32>, mut k: i32) -> i64 {
    while k != 0 {
        let mut max_index = 0;

        for i in 1..gifts.len() {
            if gifts[i] > gifts[max_index] {
                max_index = i;
            }
        }

        let new_value = (gifts[max_index] as f64).sqrt().floor() as i32;
        
        gifts[max_index] = new_value;

        k -= 1;
    }

    gifts.into_iter().map(|x| x as i64).sum()
}