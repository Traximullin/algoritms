{
    const maxWidthOfVerticalArea = function(points) {
        let sorted: number[] = [];
        let wide = 0;

        for(let i = 0; i < points.length; i++) {
            sorted.push(points[i][0])
        }
        
        sorted.sort((a,b) => a - b)
        
        for(let i = 1; i < sorted.length; i++) {
            wide = Math.max(wide, Math.abs(sorted[i - 1] - sorted[i]))
            console.log(wide)
        }

        return wide
    };

    console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]))

}