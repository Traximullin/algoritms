{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }
    
    class Solution {
        arr: number[] = [];

        constructor(head: ListNode | null) {
            while(head) {
                this.arr.push(head.val);
                head = head.next;
            }
        }
    
        getRandom(): number {
            return this.arr[~~(Math.random() * this.arr.length)]
        }
    }

    const test = new ListNode(
        1, 
        new ListNode(
            2,
            new ListNode(
                3
            )
        )
    )
    
    const val = new Solution(test)

    console.log(val.getRandom())
    console.log(val.getRandom())
    console.log(val.getRandom())
    console.log(val.getRandom())
}