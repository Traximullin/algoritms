{
    function reformatNumber(number: string): string {
        number = number.replaceAll(' ', '').replaceAll('-', '')
        
        const result = [];
        let i = 0
        
        for(null; i < number.length - 4; i += 3) {
            result.push(number.substring(i, i + 3))
        }

        if(number.length - i === 4) {
            result.push(number.substring(i, i + 2))
            result.push(number.substring(i + 2, i + 4))
        } else {
            result.push(number.substring(i))
        }

        return result.join("-")
    };

    console.log(reformatNumber('1-23-45 6'))
}