{
    // function ListNode(val, next) {
    //      this.val = (val===undefined ? 0 : val)
    //      this.next = (next===undefined ? null : next)
    // }

    const reverseList = function(head) {
        let prev = null
        let next = null
        let current = head
        
        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        
        return prev
    }

}