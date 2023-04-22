function generateHashtag (str: string) {
    const new_string = str.replace(/\s+/g, ' ').trim()

    if(new_string.length === 0) {
        return false
    }

    const result = `#${new_string.split(" ").map(elem => elem[0].toUpperCase() + elem.slice(1)).join("")}`

    if(result.length > 140) {
       return false 
    }

    return result
}

// console.log(generateHashtag(" Hello there thanks for trying my Kata"))
// console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag("  "))