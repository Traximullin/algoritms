{
    const findDelayedArrivalTime = function(arrivalTime, delayedTime) {
        const sumTime = arrivalTime + delayedTime;

        if(sumTime >= 24) {
            return sumTime - 24
        }

        return sumTime
    };

    console.log(findDelayedArrivalTime(15, 5))
}