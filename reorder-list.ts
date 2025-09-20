{
    function reorderList(head: ListNode | null): void {
        const nodeArray = [];

        while (head !== null) {
            const currNode = new ListNode(head.val, null)
            nodeArray.push(head);
            head = head.next;
        }
        
        let i = 0;
        let j = nodeArray.length - 1;
        let prev = null;

        while (i <= j) {
            nodeArray[i].next = nodeArray[j];
        
            if (prev !== null) {
                prev.next = nodeArray[i];
        
            }
            prev = nodeArray[j];
            i++;
            j--;
        }
        
        prev.next = null;
    };
}