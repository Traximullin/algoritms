pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut result = head?;
    let mut current = &mut result;

    while let Some(node) = current.next.as_mut() {
        if current.val == node.val {
            current.next = node.next.take();
        } else {
            current = current.next.as_mut().unwrap();
        }
    }

    Some(result)
}
