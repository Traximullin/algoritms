{
    function sortedListToBST(head: ListNode | null): TreeNode | null {
        if (head == null) {
            return null;
        }
        if (head.next == null) {
            return new TreeNode(head.val);
        }

        let slow: ListNode = head;
        let fast: ListNode = head;
        let prev: ListNode | null = null;

        while (fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next!;
            fast = fast.next.next;
        }

        let root = new TreeNode(slow.val);

        if (prev != null) {
            prev.next = null;
        } else {
            head = null;
        }

        root.left = sortedListToBST(head);
        root.right = sortedListToBST(slow.next);

        return root;
    }
}