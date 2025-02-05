pub fn are_almost_equal(s1: String, s2: String) -> bool {
    if s1 == s2 {
        return true;
    }
    
    let s1_coll: Vec<char> = s1.chars().collect();
    let s2_coll: Vec<char> = s2.chars().collect();
    let mut pos = vec![];

    for i in 0..s1_coll.len() {
        if s1_coll[i] != s2_coll[i] {
            pos.push(i);
            
            if pos.len() > 2 {
                return false;
            }
        }
    }

    if pos.len() != 2 {
        return false;
    }

    return s1_coll[pos[0]] == s2_coll[pos[1]] && s1_coll[pos[1]] == s2_coll[pos[0]];
}