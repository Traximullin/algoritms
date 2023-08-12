{
    type Car = number

    type Parking = number[]

    class ParkingSystem {
        parking: Parking

        constructor(big: Car, medium: Car, small: Car) {
            this.parking = [big, medium, small]
        }

        addCar(carType: Car): boolean {
            return this.parking[carType - 1]-- > 0
        }
    }

    const parkingSystem = new ParkingSystem(1, 1, 0);
    console.log(parkingSystem.addCar(1))
    console.log(parkingSystem.addCar(2))
    console.log(parkingSystem.addCar(3))
    console.log(parkingSystem.addCar(1))

}