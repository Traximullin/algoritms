{
    class MyCalendar {
        bookings: number[][];

        constructor() {
            this.bookings = [];
        }
    
        book(start: number, end: number): boolean {
            for (const booking of this.bookings) {
                const [bookingStart, bookingEnd] = booking;
                
                if (bookingStart < end && bookingEnd > start) {
                    return false
                }
            
            }
            
            this.bookings.push([start,end]);
            return true
        }
    }

    const calendar = new MyCalendar();

    console.log(calendar.book(10,20))
    console.log(calendar.book(10,20))
    // console.log(calendar.book(15,25))
    console.log(calendar.book(20,30))
    
}