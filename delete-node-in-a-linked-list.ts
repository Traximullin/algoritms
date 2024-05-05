{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function deleteNode(node: ListNode | null): void {
        while (node && node.next) {
            node.val = node.next.val

            if (!node.next.next) {
                node.next = null
            }

            node = node.next
        }
    };


    const test = new ListNode(
        4,
        new ListNode(
            5,
            new ListNode(
                1,
                new ListNode(
                    9
                )
            )
        )
    )

    console.log(deleteNode(test))
}