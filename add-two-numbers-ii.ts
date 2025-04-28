{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

    function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const stack1: number[] = [];
        const stack2: number[] = [];
    
        while (l1 !== null) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
    
        while (l2 !== null) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
    
        let carry = 0;
        let result: ListNode | null = null;
    
        while (stack1.length > 0 || stack2.length > 0 || carry !== 0) {
            let sum = carry;
            
            if (stack1.length > 0) {
                sum += stack1.pop()!;
            }
            if (stack2.length > 0) {
                sum += stack2.pop()!;
            }
            
            carry = Math.floor(sum / 10);
            const newNode = new ListNode(sum % 10);
            newNode.next = result;
            result = newNode;
        }
    
        return result;
    }
        
    const test_1 = new ListNode(
        7,
        new ListNode(
            2, 
            new ListNode(
                4, 
                new ListNode(
                    3
                )
            )
        )
    )

    const test_2 = new ListNode(
        5,
        new ListNode(
            6, 
            new ListNode(
                4
            )
        )
    )

    console.log(addTwoNumbers(test_1, test_2))
}