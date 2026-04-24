pub fn furthest_distance_from_origin(m: String) -> i32 {
    (m.len() - 2 * m.matches('L').count().min(m.matches('R').count())) as _
}
