{
    function finalString(s: string): string {
        const result: string[] = []

        for(const character of s) {
            if(character !== "i") 
                result.push(character)
            else 
                result.reverse()                
        }

        return result.join("")
    };

    console.log(finalString("poiinter"))
}