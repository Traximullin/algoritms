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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let el = head;
    let prev = head.val;
    let i = 1;
    let prevCritical = -1;
    let firstCritical: number | null = null;
    let min = Infinity;

    while(el) {
        if(
            el.next?.val &&
            ((el.val < prev && el.val < el.next.val) ||
            (el.val > prev && el.val > el.next.val))
        ) {
            if(firstCritical) min = Math.min(i - prevCritical, min);
            if(!firstCritical) firstCritical = i;
            prevCritical = i;
        }
        prev = el.val;
        el = el.next;
        i++
    }

    let max = prevCritical - firstCritical;
    if(isFinite(min) && max) return [min, max];
    return [-1, -1];
};
