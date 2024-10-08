{
    // todo
    // считать каждый год
    
    const MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const helper = (date: string) => {
        const [year, month, day] = date.split("-").map(Number);

        function isLeapYear() {
            return year % 4 == 0 || year % 100 != 0 || year % 400 == 0;
        }
    
        function getYear() {
            if (isLeapYear()) {
                return year * 366 
            } else {
                return year * 365 
            }
        }

        function getTest() {
            const day_of_year = isLeapYear() ? 366 : 365;

            if (month === 12) 
                return day_of_year - day;
            else 
                return 0
        }

        return day + getYear() + MONTH[month - 1] + getTest();
    }


    function daysBetweenDates(date1: string, date2: string): number {
        return Math.abs(helper(date2) - helper(date1));
    };

    console.log(daysBetweenDates('2020-01-15', '2019-12-31'))

}