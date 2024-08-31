{
    class SeatManager {
        room: number[];
        bookings: number[];

        constructor(n: number) {
            this.room = Array.from({ length: n }, (_, i) => i + 1);
            this.bookings = new Array(n).fill(0)
        }
    
        reserve(): number {
            const free_booking = this.bookings.findIndex((room) => room == 0);

            this.bookings[free_booking] = 1;

            return this.room[free_booking];
        }
    
        unreserve(seatNumber: number): void {
            this.bookings[seatNumber - 1] = 0;
        }
    }

    const seatManager = new SeatManager(5);
}