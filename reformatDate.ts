{
    // !TODO https://leetcode.com/problems/reformat-date/description/
    enum Month {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}
    
    function reformatDate(date: string): string {
        const [day, month, years] = date.split(" ")

        return `${years}-${Month[month] + 1}-${parseInt(day.match(/\d+/))}`
    };

    console.log(reformatDate("20th Oct 2052"))
}