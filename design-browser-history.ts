{
    class BrowserHistory {
        private history: string[]
        private links: number;

        constructor(homepage: string) {
            this.history = [homepage]
            this.links = 0;
        }
        
        visit(url: string): void {
            this.links += 1;
            this.history = this.history.slice(0, this.links)
            
            this.history.push(url)
        }
    
        back(steps: number): string {
            this.links = Math.max(0, this.links - steps);

            return this.history[this.links]
        }
    
        forward(steps: number): string {
            this.links = Math.min(this.history.length - 1, this.links + steps)

            return this.history[this.links]
        }
    }

    const test = new BrowserHistory('trest')
    test.visit('test.com')
    test.visit('test.com1')
    test.visit('test.com12')
}