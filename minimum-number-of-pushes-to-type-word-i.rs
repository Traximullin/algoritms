pub fn minimum_pushes(w: String) -> i32 {
    let k = w.len()/8; ((4*k+w.len()%8)*(k+1)) as _
}
