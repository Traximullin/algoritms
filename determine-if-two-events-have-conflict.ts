{
    const formatMinutes = (item: string) => {
        const [h, m] = item.split(":");
        
        return parseInt(h) * 60 + parseInt(m);
    }

    function haveConflict(event1: string[], event2: string[]): boolean {
        const time_1 = event1.map(formatMinutes)

        const time_2= event2.map(formatMinutes)

        return time_1[1] >= time_2[0] && time_2[1] >= time_1[0];
    };

    console.log(haveConflict(["01:15","02:00"],["02:00","03:00"]))
}