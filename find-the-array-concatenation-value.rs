pub fn find_the_array_conc_val(nums: Vec<i32>) -> i64 {
    let mut c = 0;

    let mut new_array = nums;

    while !new_array.is_empty() {
            let first = new_array.remove(0);
            
            let last = if let Some(last) = new_array.pop() {
                last.to_string()
            } else {
                "".to_string()
            };

            let char = format!("{}{}", first , last);

            let num: Result<i64, _> = char.parse();

            match num {
                Ok(number) => c += number,
                Err(e) => println!("{}", e),
            }; 
    }

    c
}