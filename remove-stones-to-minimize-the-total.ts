{
    class MaxPriorityQueue {
        enqueue() {}
    }

    function minStoneSum(piles: number[], k: number): number {
        const queue = new MaxPriorityQueue();
        let c = 0;
    
        for (let i = 0, n = piles.length; i < n; i++) {
            queue.enqueue(piles[i]);
            c += piles[i];
        }
    
        while (k--) {
            let { element } = queue.dequeue();

            c -= element;
            element -= Math.floor(element / 2);
            c += element;
            
            queue.enqueue(element);
        }
    
        return c;
    
    };

    console.log(minStoneSum([5,4,9], 2))
    // console.log(minStoneSum([4,3,6,7],3))
}