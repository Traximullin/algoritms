use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let str = input.trim();

    if str.len() > 10 {
        let first = str.chars().next().unwrap();
        let last = str.chars().last().unwrap();
        let count = str.len() - 2;

        let new_str = format!("{}{}{}", first, count, last);
        println!("{}", new_str);
    } else {
        println!("{}", str);
    }
}
