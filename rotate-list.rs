pub fn rotate_right(mut h: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
    if h.is_none() || k == 0 {
        return h;
    };
    let (mut l, mut x) = (0, &h);
    while let Some(n) = x {
        x = &n.next;
        l += 1
    }
    if l < 2 || k % l == 0 {
        return h;
    };
    let mut x = &mut h;
    for _ in 0..l - (k % l) {
        if let Some(n) = x {
            x = &mut n.next
        }
    }
    let mut res = x.take();
    let mut x = &mut res;
    while let Some(n) = x {
        x = &mut n.next
    }
    *x = h;
    res
}
