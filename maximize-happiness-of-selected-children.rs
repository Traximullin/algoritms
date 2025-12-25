use std::collections::BinaryHeap;

pub fn maximum_happiness_sum(happiness: Vec<i32>, k: i32) -> i64 {
    let mut pq: BinaryHeap<i32> = happiness.into_iter().collect();

    let mut res: i64 = 0;
    let mut neg = 0;
    for _ in 0..k {
        if let Some(top) = pq.pop() {
            let v = top - neg;
            neg += 1;
            if v <= 0 {
                break;
            }
            res += v as i64;
        } else {
            break;
        }
    }
    res
}
