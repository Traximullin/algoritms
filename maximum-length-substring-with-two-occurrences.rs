pub fn maximum_length_substring(s: String) -> i32 {
    let n = s.len();
    let mut maxi = 0;
    let bytes = s.as_bytes();

    for i in 0..n {
        let mut arr = vec![0; 26];
        for j in i..n {
            arr[(bytes[j] - b'a') as usize] += 1;

            let max_val = *arr.iter().max().unwrap();
            if max_val <= 2 {
                let len = j - i + 1;
                if len > maxi {
                    maxi = len;
                }
            }
        }
    }

    maxi as i32
}
