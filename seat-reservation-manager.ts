{
    class SeatManager {
        bookings: number[];

        constructor(n: number) {
            this.bookings = Array.from({ length: n }, (_, i) => i + 1);
        }

        reserve(): number {
            return this.bookings.shift() as number;
        }
    
        unreserve(seatNumber: number): void {
            const findIndex = this.bookings.find((item) => item > seatNumber);
        
            if (findIndex === -1) {
                this.bookings.push(seatNumber);
            } else {
                this.bookings.splice(findIndex as number, 0, seatNumber);
            }

        }

    }

    const seatManager = new SeatManager(5);
    console.log(seatManager.reserve())
    console.log(seatManager.reserve())
    console.log(seatManager.reserve())
    console.log(seatManager)
    console.log(seatManager.unreserve(1))
    console.log(seatManager.reserve())
    console.log(seatManager.reserve())
    console.log(seatManager.reserve())
}