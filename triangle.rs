pub fn minimum_total(mut triangle: Vec<Vec<i32>>) -> i32 {
    for y in 1..triangle.len() {
        for x in 0..=y {
            triangle[y][x] += if x == 0 {
                triangle[y - 1][x]
            } else if x == y {
                triangle[y - 1][x - 1]
            } else {
                triangle[y - 1][x].min(triangle[y - 1][x - 1])
            }
        }
    }
    *triangle.last().unwrap().iter().min().unwrap()
}
