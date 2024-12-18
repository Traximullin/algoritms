pub fn final_prices(prices: Vec<i32>) -> Vec<i32> {
    let mut result = Vec::new();

    'main: for i in 0..prices.len() {

        for j in i + 1..prices.len() {
            if prices[i] >= prices[j] {
                result.push(prices[i] - prices[j]);
                continue 'main;
            }
        }

        result.push(prices[i]);
    }

    return  result;
}