{
    const toUnderscore = (string: string | number) => {
        if (!string) {
            return ""
        }
        
        const result = [...string.toString()].map((elem,index) => (
            elem !== elem.toUpperCase() || !!Number(elem) || index === 0
            ? elem.toLowerCase()
            : `_${elem.toLowerCase()}`
        )).join("")

        return result
    }

    console.log(toUnderscore(5))
}