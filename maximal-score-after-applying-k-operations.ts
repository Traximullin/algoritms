{
    class MaxPriorityQueue {
        dequeue() {}
        enqueue() {}
    }

    function maxKelements(nums: number[], k: number): number {
        const pq = new MaxPriorityQueue({ compare: (a, b) => b - a })

        for (const num of nums) {
            pq.enqueue(num)
        }
        
        let r = 0

        while (k) {
            const max = pq.dequeue()
        
            r += max
        
            pq.enqueue(Math.ceil(max / 3))
        
            k--
        }

        return r
    };

    console.log(maxKelements([1,10,3,3,3], 3))
}