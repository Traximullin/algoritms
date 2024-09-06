{
     class ListNode {
         val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
     }
     
    function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
        const set = new Set(nums);
        const node = new ListNode();
        let current_node = node;

        while(head !== null) {
            if (!set.has(head.val)) {
                current_node.next = new ListNode(head.val);
                current_node = current_node.next;
            }
            head = head.next;
        }

        return node.next;
    };


    const test_2 = new ListNode(
        1,
        new ListNode(
            2, 
            new ListNode(3,
                new ListNode(4,
                    new ListNode(5)
                )
        )
    ))

    console.log(modifiedList([1,2,3], test_2))
}