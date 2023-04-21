function findMissingLetter(array) {
    const data = array.find((element, index, self) => {
        if(index === array.length - 1) {
            return "" 
        }

        if(self[index].charCodeAt() + 1 !== self[index + 1].charCodeAt()) {
            return element
        }
    })

    return String.fromCharCode(data.charCodeAt() + 1)
}
