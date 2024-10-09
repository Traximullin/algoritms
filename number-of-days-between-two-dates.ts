{
    // todo
    // считать каждый год
    
    const MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function isLeapYear(year: number) {
        return year % 4 == 0 || year % 100 != 0 || year % 400 == 0;
    }

    function getDayOfYear(year: number, month: number, day: number) {
        const day_of_year = isLeapYear(year) ? 366 : 365;

        if (month === 12) 
            return day_of_year - day;
        else 
            return 0
    }


    function daysBetweenDates(date1: string, date2: string): number {
        const [year1, month1, day1] = date1.split("-").map(Number);
        let [year2, month2, day2] = date2.split("-").map(Number);

        let r = 0;

        for  (let i = year2; i < year1 - 1; i++) {
            if (isLeapYear(i)) {
                r += 366;
            } else {
                r += 365;
            }
        }

        for (let i = month2; i < month1; i++) {
            r += MONTH[i - 1];
        }

        while (day2 !== day1) {
            if (day2 === MONTH[month2 - 1]) {
                month2 = (month2 + 1) % 12;
                day2 = 1;
            } else {
                day2 += 1;
            }
            r +=1;
        }

        return r;
    };

    console.log(daysBetweenDates('2020-01-15', '2019-12-31'))
    console.log(daysBetweenDates("2019-06-29", "2019-06-30"))

}