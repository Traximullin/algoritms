{
    class Solution {
        r: number
        x: number
        y: number
        
        constructor(radius: number, x_center: number, y_center: number) {
            this.x = x_center
            this.y = y_center
            this.r = radius

        }

        randPoint(): number[] {
            const angle = Math.random() * 2 * Math.PI
            const radius = Math.sqrt(Math.random()) * this.r
            return [this.x + radius * Math.cos(angle), this.y + radius * Math.sin(angle)]
        }
    }
}