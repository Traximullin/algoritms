{
    
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    const test = new ListNode(
        1,
        new ListNode(
            1,
            new ListNode(
                1,
                new ListNode(
                    1,
                )
            )
        )
    )

    function removeNodes(head: ListNode | null): ListNode | null {
        const r: number[] = [];

        while(head) {
            r.push(head.val);

            head = head.next;
        }

        const result = [];
        let maxSoFar = -Infinity;
        
        for (let i = r.length - 1; i >= 0; i--) {
          if (r[i] >= maxSoFar) {
            result.unshift(r[i]);
            maxSoFar = r[i];
          }
        }
        
        const node = new ListNode(result[0]);
        let current = node;

        for (let i = 1; i < result.length; i++) {
            current.next = new ListNode(result[i]);
            current = current.next;
        }

        return node;
    };

    console.log(removeNodes(test))
}