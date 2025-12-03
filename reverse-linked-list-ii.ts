/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (head == null || left === right) {
        return head;
    }

    const temp = new ListNode(0);
    temp.next = head;
    let prev = temp;

    for (let i = 1; i < left; i++) {
        prev = prev.next!;
    }

    let current = prev.next!;
    let next = current.next;

    for (let i = 0; i < right - left; i++) {
        current.next = next!.next;
        next!.next = prev.next;
        prev.next = next;
        next = current.next;
    }

    return temp.next;
};
