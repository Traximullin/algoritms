{
    function nearestValidPoint(x: number, y: number, points: number[][]): number {
        const result = points.reduce((prev, current, index) => { 
            if (current[0] == x || current[1] == y) {      
            const a = Math.abs(current[0] - x);
            const b = Math.abs(current[1] - y);
            const distance = Math.sqrt(a*a + b*b);
    
            if (distance < prev.distance) {
                prev.distance = distance;
                prev.index = index;
            } 
            }
            return prev; 
        }, {distance: Number.MAX_SAFE_INTEGER, index: -1});
    
      return result.index;
    
    };

}