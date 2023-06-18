{

    const largestAltitude = function(gain) {
        let altitude = 0;
        let highest = 0;

        for(const way of gain) {
            altitude += way
            highest = Math.max(highest, altitude)
        }

        return highest
    };


    console.log(largestAltitude([-5,1,5,0,-7]))
}