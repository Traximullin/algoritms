{
    class OrderedStream {
        list: string[]
        count: number

        constructor(n: number) {
            this.list = []
            this.count = 0
        }

        insert(id: number, value: string): string[] {
            const chunk: string[] = []

            this.list[id - 1] = value;

            while(this.list[this.count]) {
                chunk.push(this.list[this.count])
                this.count++
            }
            
            return chunk
        }
    }
}