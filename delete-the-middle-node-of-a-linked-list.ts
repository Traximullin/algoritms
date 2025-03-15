{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function deleteMiddle(head: ListNode | null): ListNode | null {
        if (!head || !head.next) 
            return null;

        const values: number[] = [];

        while(head) {
            values.push(head.val);
            head = head.next;
        }

        const middle = Math.floor(values.length / 2);

        const list_node = new ListNode(values[0]);
        let current = list_node;

        for (let i = 1; i < values.length; i++) {
            if (i === middle) 
                continue; 

            current.next = new ListNode(values[i]);
            current = current.next;
        }

        return list_node;
    };

    const test = new ListNode(
        1, 
        new ListNode(
            2, new ListNode(
                3, new ListNode(
                    4
                )
            )
        )
    )

    console.log(deleteMiddle(test))

}