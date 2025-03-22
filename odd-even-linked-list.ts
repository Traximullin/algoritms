{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }
    function oddEvenList(head: ListNode | null): ListNode | null {
        if (!head) return null; 
    
        const odd: number[] = [];
        const even: number[] = [];
        let index = 1; 
    
        let current: ListNode | null = head;
        while (current) {
            if (index % 2 === 1) odd.push(current.val);
            else even.push(current.val); 
            current = current.next;
            index++;
        }
    
        const all = [...odd, ...even];
    
        if (all.length === 0) return null; 
    
        let newHead = new ListNode(all[0]);
        let newCurrent = newHead;
    
        for (let i = 1; i < all.length; i++) {
            newCurrent.next = new ListNode(all[i]);
            newCurrent = newCurrent.next;
        }
    
        return newHead;
    }

    const test = new ListNode(
        1,
        new ListNode(
            2,
            new ListNode(
                3,
                new ListNode(
                    4,
                    new ListNode(5)
                )
            )
        )
    )

    console.log(oddEvenList(test))
}