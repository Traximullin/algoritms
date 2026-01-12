pub fn min_time_to_visit_all_points(points: Vec<Vec<i32>>) -> i32 {
    let mut result = 0;

    for i in 1..points.len() {
        let point_1 = &points[i - 1];
        let point_2 = &points[i];

        let dx = (point_2[0] - point_1[0]).abs();
        let dy = (point_2[1] - point_1[1]).abs();

        result += dx.max(dy);
    }

    result
}
