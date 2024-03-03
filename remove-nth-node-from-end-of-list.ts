{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        let c = 0;

        if(head == null || head.next == null && n == 1) 
            return null

        let temp = head

        while (temp != null && temp.next !== null) {
            temp = temp.next
            c++
        }

        const search = c - n;

        let copy = head;

        for(let i = 0; i < search; i++) {
            console.log(i)
            copy = copy.next
        }

        return copy
        console.log(search)

    };

    const test = new ListNode(
        1,
        new ListNode(
            2, 
            new ListNode(3, 
                    new ListNode(4,
                            new ListNode(5)
                        ),
                ),
        )
    )

    console.log(removeNthFromEnd(test, 2))
}