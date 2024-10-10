{
    const MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const isLeapYear = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    
    const getDateDay = (date: string) => {
        const [year, month, day] = date.split("-").map(Number);

        let days = 0;
    
        for (let i = 1970; i < year; i++) 
            days += isLeapYear(i) ? 366 : 365;
    
        for (let i = 1; i < month; i++) {
            if (i === 2 && isLeapYear(year)) days += 1;
            days += MONTH[i - 1];
        }
    
        return days + day;
    };
    
    function daysBetweenDates(date1: string, date2: string): number {
        return Math.abs(getDateDay(date2) - getDateDay(date1));
    }

    console.log(daysBetweenDates('2020-01-15', '2019-12-31'))
    console.log(daysBetweenDates("2019-06-29", "2019-06-30"))
}