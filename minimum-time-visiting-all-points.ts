{
    const minTimeToVisitAllPoints = function(points) {
        let result = 0

        for(let i = 1; i < points.length; ++i) {
            const point_1 = points[i - 1]
            const point_2 = points[i]

            result += Math.max(Math.abs(point_1[0] - point_2[0]), Math.abs(point_1[1] - point_2[1]))
        }

        return result
    };

    console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))
}