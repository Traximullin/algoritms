{
    function insertionSortList(head: ListNode | null): ListNode | null {
        if (!head) return head;
        const rootNode = head;
        
        const list = [];
        
        while(head) {
            list.push(head)
            
            head = head.next;
        }
        
        for (let i=1; i < list.length; i++) {
            let currentIndex = i;
            
            while(currentIndex > 0 && list[currentIndex-1].val > list[currentIndex].val) {
                const currentValue = list[currentIndex].val;
                list[currentIndex].val = list[currentIndex-1].val;
                list[currentIndex-1].val = currentValue;
                
                currentIndex--;
            }
        }
        
        return rootNode;
    };
}