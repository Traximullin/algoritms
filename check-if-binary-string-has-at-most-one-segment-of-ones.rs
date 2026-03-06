pub fn check_ones_segment(s: String) -> bool {
    s.bytes().skip_while(|&b| b == b'1').all(|b| b == b'0')
}
