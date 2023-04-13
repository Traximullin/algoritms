const narcissistic = (value: number) => {
    const test = Array.from(value.toString(), Number)
    let count = 0

    test.forEach((number) => {
        count += number ** test.length
    })

    return count === value
}


console.log(narcissistic(153))
