use std::collections::VecDeque;

impl Solution {
    pub fn reorder_list(head: &mut Option<Box<ListNode>>) {
        let mut queue = VecDeque::new();
        let mut node = head.take();
        while let Some(mut n) = node {
            node = n.next.take();
            queue.push_back(n);
        }
        let mut new = ListNode::new(0);
        let (mut ptr, mut front) = (&mut new, true);
        while !queue.is_empty() {
            ptr.next = match front {
                true => queue.pop_front(),
                false => queue.pop_back(),
            };
            front = !front;
            ptr = ptr.next.as_mut().unwrap();
        }
        *head = new.next;
    }
}
