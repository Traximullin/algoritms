{
    const removeElements = function(head, val) {
        if (!head)
            return head

        while (head) {
            if (head.val == val) {
                head = head.next
            } else {
                break
            }
        }

        let ref = head

        while (ref && ref.next) {
            if (ref.next.val == val) 
                ref.next = ref.next.next
            else 
                ref = ref.next
        }

        return head
    };
}