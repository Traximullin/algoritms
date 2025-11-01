use std::collections::HashSet;

pub fn modified_list(nums: Vec<i32>, head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let nums = nums.into_iter().collect::<HashSet<_>>();
    let mut head = head;
    let mut cur = &mut head;

    while let Some(mut x) = cur.take() {
        if nums.contains(&x.val) {
            *cur = x.next.take();
        } else {
            cur = &mut cur.insert(x).next;
        }
    }

    head
}
