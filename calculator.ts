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
            this.number /= value
            return this
        }
        
        power(value) {
            this.number *= value
            return this
        }
        getResult() {
            return this.number        
        }
    }

    const calc = new Calculator(10)

    console.log(calc.add(5).subtract(7).getResult())
}