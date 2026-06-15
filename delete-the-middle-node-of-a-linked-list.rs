
pub fn delete_middle(mut h: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut cnt = 0;
    let mut s = &h;
    while let Some(n) = &s {
        s = &n.next;
        cnt += 1
    }
    if cnt <= 1 {
        return None;
    }
    let mut s = &mut h;
    for i in 0..cnt / 2 - 1 {
        s = &mut s.as_mut().unwrap().next
    }
    let mid = s.as_mut().unwrap().next.take();
    s.as_mut().unwrap().next = mid.and_then(|mut n| n.next.take());
    h
}
