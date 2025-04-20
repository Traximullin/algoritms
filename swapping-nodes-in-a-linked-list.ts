{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function swapNodes(head: ListNode | null, k: number): ListNode | null {
        const arr: number[] = [];

        while(head) {
            arr.push(head.val);
            head = head.next;
        }
        
        console.log(arr)
    };

    const test = new ListNode(
        1,
        new ListNode(
            2, 
            new ListNode(
                3,
                new ListNode(
                    4,
                    new ListNode(
                        5
                    )
                )
            )
        )
    )

    console.log(swapNodes(test, 2))
}