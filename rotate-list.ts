function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head === null) return null;
    let root = head;
    let len = 1;
    while(root.next !== null) {
        root = root.next;
        len++;
    }
    let requiredRotations = len - (k % len);
    if(requiredRotations == 0) {
        return head;
    }
    root.next = head;
    while(requiredRotations) {
        root = root.next;
        --requiredRotations;
    }
    head = root.next;
    root.next = null;
    return head;
};