{
    const sortList = function(head) {
        if (!head) 
            return null

        const nodes = []

        while (head) {
            nodes.push(head)
            head = head.next
        }

        nodes.sort((a,b) => a.val - b.val)

        for(let i = 0; i < nodes.length; i++) {
            nodes[i].next = nodes[i + 1] || null
        }

        return nodes[0]
    };
}