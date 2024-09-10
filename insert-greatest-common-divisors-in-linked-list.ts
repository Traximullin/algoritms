{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function helper(current: number, next: number) {
        if (next === 0) 
            return current;
        return helper(next, current % next);
    }

    function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
        let node = head;

        while (node?.next) {
            const diff = helper(node.val, node.next.val);
            
            node.next = new ListNode(diff, node.next);

            node = node.next.next;
        }

        return head;
    };

    const test = new ListNode(
        18,
        new ListNode(
            6,
            new ListNode(
                10,
                new ListNode(
                    3
                )
            )
        )
    )

    console.log(insertGreatestCommonDivisors(test))
}