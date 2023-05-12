{
    const topThreeWords = (text) => {
        text = text.replace(/\s+/g, ' ').trim()
        console.log(text)
        const s = text.split(" ").findIndex(elem => elem === "a")        
        console.log(s)
    }   

    console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))
}