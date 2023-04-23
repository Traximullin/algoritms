const fibonacci = (num: number) => {
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(11))



