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
        let current = head;
        const arr = []
        
        while (current){
                arr.push(current)
                current = current?.next
        }
        
        arr.splice(arr.length - n, 1)

        if(arr.length === 0){return null}

        for(let i = 0 ; i < arr.length; i++){
            arr[i].next = arr[i + 1] ?? null
        }
        
        return arr[0]
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