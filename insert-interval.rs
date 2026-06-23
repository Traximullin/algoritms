pub fn insert(mut intervals: Vec<Vec<i32>>, mut new_int: Vec<i32>) -> Vec<Vec<i32>> {
    let i = intervals.partition_point(|v| v[1] < new_int[0]);
    let j = intervals.partition_point(|v| v[0] <= new_int[1]);

    let slice: Vec<_> = intervals.drain(i..j).flatten().collect();

    if let [first, .., last] = &slice[..] {
        new_int[0] = new_int[0].min(*first);
        new_int[1] = new_int[1].max(*last);
    }

    intervals.insert(i, new_int);

    intervals
}
