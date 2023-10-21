{
    const dayOfTheWeek = function(day, month, year) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        const date = new Date(`${month},${day},${year}`);
        
        const dayNumber = date.getDay()
        
        return days[dayNumber]
        
    };
}