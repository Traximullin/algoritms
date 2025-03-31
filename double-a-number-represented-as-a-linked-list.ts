{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function doubleIt(head: ListNode | null): ListNode | null {
        const nums: number[] = [];

        while (head) {
            nums.push(head.val);
            head = head.next;
        }

        let carry = 0;

        for (let i = nums.length - 1; i >= 0; i--) {
            const value = nums[i] * 2 + carry;
            nums[i] = value % 10;
            carry = Math.floor(value / 10);
        }
        
        if (carry) {
            nums.unshift(carry);
        }

        const new_node = new ListNode(nums[0]);
        let link = new_node;

        for (let i = 1; i < nums.length; i++) {
            link.next = new ListNode(nums[i]);
            link = link.next; 
        }

        return new_node;
    };

    const linkedList = new ListNode(9,
        new ListNode(1,
            new ListNode(9,
                new ListNode(5,
                    new ListNode(0,
                        new ListNode(5,
                            new ListNode(1,
                                new ListNode(9,
                                    new ListNode(9,
                                        new ListNode(9,
                                            new ListNode(9,
                                                new ListNode(9,
                                                    new ListNode(9,
                                                        new ListNode(9,
                                                            new ListNode(9,
                                                                new ListNode(9,
                                                                    new ListNode(9,
                                                                        new ListNode(9,
                                                                            new ListNode(9,
                                                                                new ListNode(9,
                                                                                    new ListNode(9,
                                                                                        new ListNode(9,
                                                                                            new ListNode(9,
                                                                                                new ListNode(9,
                                                                                                    new ListNode(9,
                                                                                                        new ListNode(9,
                                                                                                            new ListNode(9,
                                                                                                                new ListNode(9,
                                                                                                                    new ListNode(9,
                                                                                                                        null
                                                                                                                    )
                                                                                                                )
                                                                                                            )
                                                                                                        )
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );

    console.log(doubleIt(linkedList))
}