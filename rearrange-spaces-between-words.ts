{
    function reorderSpaces(text: string): string {
        let c = 0;
        let word = "";
        const words: string[] = [];

        for (const char of text) {

            if (char === " ") {
                c++;
                word !== "" && words.push(word)
                word = "";
            } else {
                word += char;
            }

        }

        if (word !== "") {
            words.push(word);
        }
        
        const spaces = ~~(c / (words.length - 1))
        const spacesAtTheEnd = " ".repeat(spaces);
        let final = "";

        words.forEach((item, index, self) => {
            if (self.length - 1=== index) {
                final += item
            } else {
                final += item + spacesAtTheEnd;
            }
        })

        
        const diff = text.length - final.length;

        return final +  " ".repeat(diff);
    };

    console.log(reorderSpaces("this   is   a   sentence"))

    console.log("this   is   a   sentence" === "this   is   a   sentence")
}