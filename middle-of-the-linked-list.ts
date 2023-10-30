{
    const middleNode = function(head) {
        let twice = head,
            once = head;

        while(twice && twice.next) {
            twice = twice.next.next
            once = once.next
        }

        return once
    };
}