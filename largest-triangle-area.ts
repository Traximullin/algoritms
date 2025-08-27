{
    function largestTriangleArea(points: number[][]): number {
        function area(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
            return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
        }

        let maxArea = 0;
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                for (let k = j + 1; k < points.length; k++) {
                    const [x1, y1] = points[i];
                    const [x2, y2] = points[j];
                    const [x3, y3] = points[k];
                    maxArea = Math.max(maxArea, area(x1, y1, x2, y2, x3, y3));
                }
            }
        }

        return maxArea;
    };
}