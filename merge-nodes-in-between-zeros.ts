{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }
    // TODO 0(1)
    function mergeNodes(head: ListNode | null): ListNode | null {
        let node = new ListNode();
        const result: number[] = [];
        let c = 0;

        while (head) {
            head = head.next;

            if (head?.val == 0) {
                
                if (c !== 0) {
                    result.push(c)
                }
                c = 0;
            } else if (head?.val) {
                c += head.val;
            }
        }

        while (result.length) {
            node.next = new ListNode(result.pop(), node.next);
        }


        return node.next;
    };

    const test = new ListNode(
        0,
        new ListNode(
            3,
            new ListNode(
                1,
                new ListNode(
                    0,
                    new ListNode(
                        4,
                        new ListNode(
                            5,
                            new ListNode(
                                2,
                                new ListNode(
                                    0
                                )
                            )
                        )
                    )
                )
            )
        )
    )

    console.log(mergeNodes(test))

}