{
    const intersection = function(numsArray) {
        for(let i = 1; i < numsArray.length; i++) {
            numsArray[0] = numsArray[i].filter(x => numsArray[0].includes(x)) 
        }

        return numsArray[0].sort((a,b) => a -b )
    };

    console.log(intersection([[7,34,45,10,12,27,13],[27,21,45,10,12,13]]

        )
}