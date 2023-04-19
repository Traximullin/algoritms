const factorial = (number: number) => {
    if(number === 1 || number === 0) {
        return number
    } else {
        return number * factorial(number - 1)
    }
}

const zeros = (number) => {
    const test = Array.from(factorial(number).toString(), Number)

    console.log(factorial(number).toString().split("0"))
}

console.log(zeros(12))