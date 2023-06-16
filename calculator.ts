{
    class Calculator {
        number: number

        constructor(value) {
            this.number = value
        }
        
        add(value){
            this.number += value
            return this
        }
        
        subtract(value){
            this.number -= value
            return this
        }
        
        multiply(value) {
            this.number *= value
            return this
        }
        
        divide(value) {
            if (value === 0) {
                throw new Error("Division by zero is not allowed");
            }
            this.number /= value
            return this
        }
        
        power(value) {
            this.number **= value
            return this
        }

        getResult() {
            return this.number        
        }
    }

    const calc = new Calculator(20)

    console.log(calc.divide(0).getResult())
}