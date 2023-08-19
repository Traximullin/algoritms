{
    const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const helper = (number: string) => {
        return number.length === 1 ? `0${number}` : number
    }

    const reformatDate = function(date) {
        const [ day, month, year ] = date.split(" ")

        const currentDay = helper(day.replace(/[^+\d]/g, ''))

        const currentMonth = helper(String(MONTH.indexOf(month) + 1))

        return `${year}-${currentMonth}-${currentDay}`
    };

    console.log(reformatDate("20th Oct 2052"))
}