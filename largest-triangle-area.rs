pub fn largest_triangle_area(p: Vec<Vec<i32>>) -> f64 {
    let mut r = 0f64;
    for p1 in &p {
        for p2 in &p {
            for p3 in &p {
                r = r.max(
                    ((p2[0] - p1[0]) * (p3[1] - p1[1]) - (p3[0] - p1[0]) * (p2[1] - p1[1])).abs()
                        as f64,
                )
            }
        }
    }
    r * 0.5
}
