pub fn convert_date_to_binary(date: String) -> String {
    let collection: Vec<&str> = date.split("-").collect();
    let mut vec: Vec<String> = vec![];

    for collect in collection {
        let num = collect.parse::<i32>().unwrap();

        vec.push(format!("{num:b}"));
    }

    return vec.join("-");        
}