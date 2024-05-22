{
    const maximumUnits = function(boxTypes, truckSize) {
        let c = 0;

        boxTypes = boxTypes.sort((a,b) => b[1] - a[1])

        for (let i = 0;i < boxTypes.length; i++) {
            if (truckSize <= 0) {
                return c
            }

            const [size, weight] = boxTypes[i]

            if (truckSize > size) {
                c += size * weight
                truckSize -= size
            } else {
                c += truckSize * weight;
                truckSize -= size
            }
        }

        return c;
    };


    console.log(maximumUnits([[1,3],[2,2],[3,1]], 4))
}