{
    const numberOfEmployeesWhoMetTarget = function(hours, target) {
        let result = 0 

        for(const hour of hours) {
            if(hour >= target) {
                result++
            }
        }

        return result
    };

    console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2))
}