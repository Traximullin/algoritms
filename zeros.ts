{
    const zeros = (number: number) => {
        let result = 0

        while(number > 0) {
            number /= 5
            result += Math.floor(number)
        }

        return result
    }
}