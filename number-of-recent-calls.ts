{
    class RecentCounter {
        private queue: number[]

        constructor() {
            this.queue = []
        }

        ping(t: number) {
            const duration = t - 3000;

            this.queue.push(t)
        
            while(this.queue[0] < duration) {
                this.queue.shift();
                console.log(this.queue)
            }

            return this.queue.length
        }

    }

    const test = new RecentCounter()

    console.log(test.ping(1))
    console.log(test.ping(100))
    console.log(test.ping(3001))
    console.log(test.ping(3002))
}