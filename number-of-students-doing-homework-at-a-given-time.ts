{
    function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
        let c = 0;

        for(let i = 0; i < startTime.length; i++) {
            if(startTime[i] <= queryTime && endTime[i] >= queryTime) 
                c++
        }

        return c
    };

    console.log(busyStudent([1,2,3], [3,2,7], 4))
}