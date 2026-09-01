impl Solution {
    pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dummy = Box::new(ListNode {
            val: -1,
            next: head,
        });
        let mut pre = &mut dummy;

        while let Some(mut p) = pre.next.take() {
            if let Some(mut q) = p.next.take() {
                p.next = q.next.take();
                q.next = Some(p);
                pre.next = Some(q);

                pre = pre.next.as_mut().unwrap().next.as_mut().unwrap();
            } else {
                pre.next = Some(p);
                pre = pre.next.as_mut().unwrap();
            }
        }

        dummy.next
    }
}
