{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    const test = new ListNode(1, new ListNode(0, new ListNode(1)))

    function getDecimalValue(head: ListNode | null): number {
        let r = 0;

        while(head) {
            r = r * 2 + head.val;
            head = head.next;
        }

        return r
    };
    
    console.log(getDecimalValue(test))
}