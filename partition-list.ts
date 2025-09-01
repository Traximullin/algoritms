{
    function partition(head: ListNode | null, x: number): ListNode | null {
        let curr = head;

        let lowerlist = new ListNode(0);
        let dummyl = lowerlist;

        let upperlist = new ListNode(0);
        let dummyu = upperlist;

        while(curr) {
            if(curr.val < x) {
                lowerlist.next = new ListNode(curr.val);
                lowerlist = lowerlist.next;
            } else {
                upperlist.next = new ListNode(curr.val);
                upperlist = upperlist.next;
            }
            curr = curr.next;
        }

        lowerlist.next = dummyu.next

        return dummyl.next;
    };
}