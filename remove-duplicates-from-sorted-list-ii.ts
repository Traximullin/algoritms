{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function deleteDuplicates(head: ListNode | null): ListNode | null {
        if (!head)
            return null;

        const nums = [];
        let prev;

        while (head) {
            if (head.val !== head.next?.val && head.val !== prev) {
                nums.push(head.val);
            } 
            prev = head.val;
            head = head.next;
        }

        if (!nums.length) {
            return null;
        }

        let list_node = new ListNode(nums[0]);
        let link = list_node;

        for (let i = 1; i < nums.length; i++) {
            link.next = new ListNode(nums[i]);
            link = link.next;
        }

        return list_node;
    };

    const test = new ListNode(
        1,
        new ListNode(
            1, 
            new ListNode(
                1, 
                new ListNode(
                    2,
                    new ListNode(
                        3
                    )
                )
            )
        )
    )

    console.log(deleteDuplicates(test))
}