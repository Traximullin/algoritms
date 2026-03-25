use std::cmp;

pub fn max_width_of_vertical_area(points: Vec<Vec<i32>>) -> i32 {
    let mut sorted = Vec::new();
    let mut wide = 0;

    for i in 0..points.len() {
        sorted.push(points[i][0]);
    }

    sorted.sort();

    for i in 1..sorted.len() {
        wide = cmp::max(wide, (sorted[i - 1] - sorted[i]).abs())
    }

    wide
}
