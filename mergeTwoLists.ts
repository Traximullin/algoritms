{
    //  Definition for singly-linked list.
    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

    var mergeTwoLists = function(list1, list2) {
        if(!list1) return list2
        if(!list2) return list1

        if(list1.val <= list2.val) {
            list1.next = mergeTwoLists(list1.next,list2)
            return list1
        } else {
            list2.next = mergeTwoLists(list1,list2.next)
            return list2
        }
    };

    const list_one = new ListNode(1,2)
    const list_two = new ListNode(1,3)
    console.log(list_one)
}