pub fn vowel_strings(words: Vec<String>, left: i32, right: i32) -> i32 {
    let mut vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let mut count = 0;

    for i in left as usize..=right as usize {
        let size = words[i].len();
        
        let first = words[i].chars().nth(0).unwrap();
        let last = words[i].chars().nth(size - 1).unwrap();

        if vowels.contains(&first) && vowels.contains(&last) {
            count += 1;
        }
    }

    count
}