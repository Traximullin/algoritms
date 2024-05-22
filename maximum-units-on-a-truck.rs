pub fn maximum_units(mut box_types: Vec<Vec<i32>>, truck_size: i32) -> i32 {
    let mut c = 0;
    let mut size = truck_size;

    box_types.sort_by(|a,b| b[1].cmp(&a[1]));

    for i in 0..box_types.len() {
        if size <= 0 {
            return c;
        } else {
            if size > box_types[i][0] {
                c += box_types[i][0] * box_types[i][1];
                size -= box_types[i][0];
            } else {
                c += size * box_types[i][1];
                return  c;
            }
        }
    }

    return c;
}