{
    function largestAltitude(gain: number[]): number {
        let alt = 0
        let maxPoint = 0

        for(const way of gain) {
            alt += way
            maxPoint = Math.max(maxPoint,alt)
        }

        return maxPoint
    };

    console.log(largestAltitude([-5,1,5,0,-7]))
}